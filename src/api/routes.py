"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, User_type, Veterinaria, Medico, Cliente, Agenda, Mascota, Desparasitacion, Vacuna, Ficha_Medica
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# ___________POST-TOKEN____________


@api.route("/token", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # ___usuario de prueba para probar funcionamiento
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# ***********************ENPOINT CLIENTES************************
# ---------------------------------------------------------------


# lista todos los clientes
@api.route('/clientes', methods=["GET"])
def get_clientes():
    clientes = Cliente.query.filter().all()
    result = list(map(lambda clientes: clientes.serialize(), clientes))
    response_body = {"clientes": result, "msg": "clientes"}
    return jsonify(response_body), 200


# lista por cada cliente
@api.route('/clientes/int:id_cliente', methods=["GET"])
def get_cliente(id_cliente):
    cliente = Clientes.query.get(id_cliente)
    return jsonify(client.serialize()), 200

# Delete cliente


@api.route('/clientes/int:id:cliente', methods=["DELETE"])
def delete_cliente(id_cliente):
    delete = Clientes.query.filter_by(id_cliente=id_cliente).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Cliente borado"}), 200

# ***********************ENPOINT MEDICOS*************************
# ---------------------------------------------------------------


# lista todos los médicos
@api.route('/medicos', methods=["GET"])
def get_medicos():
    medicos = Medico.query.filter().all()
    result = list(map(lambda medicos: medicos.serialize(), medicos))
    response_body = {"medicos": result, "msg": "medicos"}
    return jsonify(response_body), 200

# lista por cada medico


@api.route('/medicos/int:id:medico', methods=["GET"])
def get_doctor(id_medico):
    medico = Medicos.query.get(id_medico)
    return jsonify(medico.serialize()), 200

# Delete medico


@api.route('/medicos/int:id:medico', methods=["DELETE"])
def delete_medico(id_medico):
    delete = Medicos.query.filter_by(id_medico=id_medico).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Medico borado"}), 200

# ***********************ENPOINT MASCOTAS*************************
# ---------------------------------------------------------------

# lista de mascotas


@api.route('/mascotas', methods=["GET"])
def get_mascotas():
    mascotas = Mascota.query.filter().all()
    result = list(map(lambda mascotas: mascotas.serialize(), mascotas))
    response_body = {"mascotas": result, "msg": "mascotas"}
    return jsonify(response_body), 200

# lista mascotas por cada cliente


@api.route('/clientes/int:cliente_id/mascotas', methods=["GET"])
def get_mascota(cliente_id):
    mascota = Mascota.query.get(cliente_id)
    return jsonify(mascotas), 200

# lista una mascota de un cliente


@api.route('/clientes/int:id_cliente/mascotas/int:id_mascota', methods=["GET"])
def get_una_mascota(id_cliente, id_mascota):
    mascota = Mascota.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    return jsonify(mascota.serialize()), 200

# Delete Mascota


@api.route('/clientes/int:id:cliente/mascotas/int:id_mascota', methods=["DELETE"])
def delete_mascota(id_cliente, id_mascota):
    delete = Mascota.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Mascota eliminada"}), 200


# ***********************ENPOINT FICHAS MEDICAS*************************
# ----------------------------------------------------------------------

# ficha historia clinica por mascota
@api.route('/clientes/int:id_cliente/mascota/int:id_mascota/ficha', methods=["GET"])
def get_ficha(id_cliente, id_mascota):
    ficha = Ficha_Medica.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    return jsonify(ficha.serialize()), 200
# mas dele


# ficha desparasitación por mascota
@api.route('/clientes/int:id_cliente/mascotas/int:id_mascota/desparasitacion', methods=["GET"])
def get_desparasitacion(id_cliente, id_mascota):
    desparasitacion = Desparasitacion.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    return jsonify(desparasitacion.serialize()), 200

# ficha vacunacion por mascota


@api.route('/clientes/int:id_cliente/animals/int:id_mascota/vacunacion', methods=["GET"])
def get_vacunacion(id_cliente, id_mascota):
    vacunacion = Vacunacion.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    return jsonify(vacunacion.serialize()), 200

# delete historia clinica


@api.route('/clientes/int:id:cliente/mascotas/int:id_mascota/ficha', methods=["DELETE"])
def delete_ficha(id_cliente, id_mascota):
    delete = Ficha_Medica.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Ficha eliminada eliminada"}), 200

# delete desparasitación


@api.route('/clientes/int:id:cliente/mascotas/int:id_mascota/desparasitacion', methods=["DELETE"])
def delete_desparasitacion(id_cliente, id_mascota):
    delete = Desparasitacion.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Desparasitación eliminada"}), 200

# Delete Vacunacion


@api.route('/clientes/int:id:cliente/mascotas/int:id_mascota/vacunacion', methods=["DELETE"])
def delete_vacunacion(id_cliente, id_mascota):
    delete = Vacunacion.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Vacunacion eliminada"}), 200


# ***********************ENPOINT AGENDA*************************
# --------------------------------------------------------------

# agenda completa

# agenda por evento
