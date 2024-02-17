from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3001"}})

mongodb_uri = "mongodb+srv://deer:DeerHacks2024GroupOf4@DeerHacks2024.pfxfbes.mongodb.net/?retryWrites=true&w=majority"  # Replace with your MongoDB URI
# mongo = PyMongo(app)

client = MongoClient(mongodb_uri)
db = client['DeerHacks2024']

collection = db['DeerHacks2024']

@app.route('/api/sentences', methods=['POST'])
def insert_data():
    data = request.get_json()

    # Insert data into MongoDB
    result = collection.insert_one(data)

    return jsonify({"message": "Data inserted successfully", "inserted_id": str(result.inserted_id)})

if __name__ == '__main__':
    app.run(debug=True)
