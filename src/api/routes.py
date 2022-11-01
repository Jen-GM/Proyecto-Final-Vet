"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

#___________POST-TOKEN____________
@api.route("/token", methods=["POST"])
def login():
    user = request.json.get("user", None)
    password = request.json.get("password", None)
    #___usuario de prueba para probar funcionamiento
    if user != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#***********************ENPOINT CLIENTES************************
#---------------------------------------------------------------


#lista todos los clientes
@api.route('/clients', methods=["GET"]) 
def get_clients ():
    clients = Clients.query.filter().all()
    result = list(map(lambda clients: clients.serialize(), clients))
    response_body = {"clients": result, "msg": "clients"}
    return jsonify(response_body), 200

#lista por cada cliente
@api.route('/clients/int:client_id', methods=["GET"]) 
def get_client(client_id):
    client = Clients.query.get(client_id)
    return jsonify(client.serialize()), 200

#***********************ENPOINT MEDICOS*************************
#---------------------------------------------------------------


#lista todos los médicos
@api.route('/doctors', methods=["GET"]) 
def get_doctors ():
    doctors = Doctors.query.filter().all()
    result = list(map(lambda doctors: doctors.serialize(), doctors))
    response_body = {"doctors": result, "msg": "doctors"}
    return jsonify(response_body), 200

#lista por cada medico
@api.route('/doctors/int:doctor_id', methods=["GET"]) 
def get_doctor(doctor_id):
    doctor = Doctors.query.get(doctor_id)
    return jsonify(doctor.serialize()), 200

#***********************ENPOINT ANIMALES*************************
#---------------------------------------------------------------

#lista de mascotas
@api.route('/animals', methods=["GET"]) 
def get_clients ():
    animals = Animals.query.filter().all()
    result = list(map(lambda animals: animals.serialize(), animals))
    response_body = {"animals": result, "msg": "animals"}
    return jsonify(response_body), 200

#lista por cada mascota
@api.route('/animals/int:animal_id', methods=["GET"]) 
def get_animal(animal_id):
    animal = Animals.query.get(animal_id)
    return jsonify(animal.serialize()), 200






