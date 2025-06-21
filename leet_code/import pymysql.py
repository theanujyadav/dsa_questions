import pymysql
import json
from datetime import datetime

def save_query_result_to_file(query, filename):
    # Connect to MySQL database
    connection = pymysql.connect(
        host='combined-v4-db-cluster.cluster-cln0nrajmduw.us-east-1.rds.amazonaws.com',
        user='app_forwoodid',
        password='9e6e976733ee9bfa9c9587569ac5228e',
        database='forwood_id',
        cursorclass=pymysql.cursors.DictCursor
    )

    try:
        with connection.cursor() as cursor:
            # Execute the query
            cursor.execute(query)

            def default(o):
                if isinstance(o, datetime):
                    return o.isoformat()
            
            # result = cursor.fetchall()
            # columns = [column[0] for column in cursor.description]
            # data = []
            # for row in result:
            #     data.append(dict(zip(columns, row)))
                
            # json_data = json.dumps(data, indent=4)
            
            # json_data = json.dumps(result, default=default, ensure_ascii=False, separators=(',', ':'))                
            # with open("NONO.json", 'w') as file:
            #     # Convert the result to JSON format and write it to the file
            #     json.dump(json_data, file)
            #     print(f"Data saved to {filename}")            
            
            # Fetch all rows
            records = sanitize_raw_records(
                records=cursor.fetchall()
            )

            # Write fetched data to file
            with open(filename, 'w') as file:
                # Convert the result to JSON format and write it to the file
                json.dump(records, file)
                print(f"Data saved to {filename}")
    finally:
        # Close the database connection
        connection.close()

# Example usage

def sanitize_raw_records(records: list) -> list:
    for record in records:
        record = sanitize_raw_record(record=record)
    return records

def sanitize_raw_record(record: dict) -> dict:
    if not record:
        return record

    # Removing duplicate attributes of DAC
    record.pop('udc.createdAt', None)
    record.pop('udc.forwoodUuid', None)

    record['roles'] = json.loads(record.get('roles')) if record.get('roles') else []
    record['teams'] = json.loads(record.get('teams')) if record.get('teams') else []
    record['federatedIdentityDetails'] = json.loads(record.get('federatedIdentityDetails')) if record.get('federatedIdentityDetails') else []

    for value in ['lastLogin', 'createdAt', 'updatedAt', 'passwordUpdatedAt', 'eulaAccepted', 'dacCreatedAt']:
        if isinstance(record.get(value), datetime):
            record[value] = record.get(value).isoformat()

    if record.get('eulaVersion'):
        record['eulaVersion'] = str(record['eulaVersion'])

    # MySQL store boolean field as tinyint(1), as a result data return for those field will be either 0 or 1
    record['inCrmLeadershipRole'] = bool(record['inCrmLeadershipRole'])
    record['inOperationalRole'] = bool(record['inOperationalRole'])
    record['federatedIdentity'] = bool(record['federatedIdentity'])
    record['managed'] = bool(record.get('managed'))

    return record

query = "SELECT * FROM users LIMIT 1"
filename = "query_result.json"
save_query_result_to_file(query, filename)
