from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle5 as pickle
import numpy as np
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import uuid


app = Flask(__name__)
CORS(app)
model = pickle.load(open('project.pkl', 'rb'))
cred = credentials.Certificate("key1.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
users_ref = db.collection('users')


@app.route("/", methods=["POST"])
def api():

    print("_______________________")
    a = [float(x) for x in request.json.values()]
    b = [np.array(a)]
    prediction = model.predict(b)
    p = prediction.item()
    data = {
        'a': a[0],
        'b': a[1],
        'c': a[2],
        'd': a[3],
        'e': a[4],
        'f': a[5],
        'g': a[6],
        'h': a[7],
        'l': a[8],
        'm': a[9],
        'n': a[10],
        'o': a[11],
        'x': a[12],
        't': p,
    }
    users_ref.document(str(uuid.uuid1())).set(data)

    print("_______________________")

    return {"prediction": "%d" % p}


if __name__ == "__main__":
    app.run(debug=True)
