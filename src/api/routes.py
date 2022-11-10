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
import json
from datetime import datetime

api = Blueprint('api', __name__)


# ___________POST-TOKEN__________
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
    response_body = {"clientes": result, "msg": "todos los clientes clientes"}
    return jsonify(response_body), 200


# lista por cada cliente
@api.route('/clientes/<int:id_cliente>', methods=["GET"])
def get_cliente(id_cliente):
    cliente = Cliente.query.get(id_cliente)
    return jsonify(cliente.serialize()), 200

# ____Agregar clientes___


@api.route('/clientes', methods=["POST"])  #  POST
def add_cliente():
    body = request.get_json()
    cliente = Cliente(
        nombre=body["nombre"],
        direccion=body["direccion"],
        telefono=body["telefono"]
    )
    db.session.add(cliente)
    db.session.commit()
    return jsonify({"msj": "Cliente agregado"}), 200


# Delete cliente
@api.route('/clientes/<int:id_cliente>', methods=["DELETE"])
def delete_cliente(id_cliente):
    delete = Cliente.query.filter_by(id=id_cliente).first()
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
    response_body = {"medicos": result, "msg": "todos los medicos"}
    return jsonify(response_body), 200

# lista por cada medico


@api.route('/medicos/<int:id_medico>', methods=["GET"])
def get_doctor(id_medico):
    medico = Medico.query.get(id_medico)
    return jsonify(medico.serialize()), 200

# __________Agregar_Medicos_________


@api.route('/medicos', methods=["POST"])  #  POST
def add_medico():
    body = request.get_json()
    medico = Medico(
        nombre=body["nombre"],
        telefono=body["telefono"])
    db.session.add(medico)
    db.session.commit()
    return jsonify({"msj": "Medico agregado"}), 200


# Delete medico
@api.route('/medicos/<int:id_medico>', methods=["DELETE"])
def delete_medico(id_medico):
    delete = Medico.query.filter_by(id=id_medico).first()
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
    response_body = {"mascotas": result, "msg": "total de mascotas"}
    return jsonify(response_body), 200

# lista mascotas por cada cliente


@api.route('/clientes/<int:id_cliente>/mascotas', methods=["GET"])
def get_mascota(id_cliente):
    mascota = Mascota.query.filter_by(cliente_id=id_cliente)
    result = list(map(lambda mascota: mascota.serialize(), mascota))
    print(mascota)
    return jsonify(result), 200

# lista una mascota de un cliente


@api.route('/clientes/<int:id_cliente>/mascotas/<int:id_mascota>', methods=["GET"])
def get_una_mascota(id_cliente, id_mascota):
    mascota = Mascota.query.filter_by(
        cliente_id=id_cliente, id=id_mascota).first()
    return jsonify(mascota.serialize()), 200

    # _________Agregar_Mascotas____


@api.route('/mascotas', methods=["POST"])  #  POST
def add_mascota():
    body = request.get_json()
    mascota = Mascota(nombre=body["nombre"], especie=body["especie"],
                      raza=body["raza"], internamiento=body["internamiento"])
    db.session.add(mascota)
    db.session.commit()
    return jsonify({"msj": "Mascota agregada"}), 200

# PUT


@api.route('clientes/<int:cliente_id>/mascotas/<int:id_mascota>', methods=["PUT"])
def mod_mascota(cliente_id, id_mascota):
    body = Mascota.query.filter_by(
        cliente_id=cliente_id, id=id_mascota).first()
    nombre = request.json['nombre']
    especie = request.json['especie']
    raza = request.json['raza']
    internamiento = request.json['internamiento']

    body.nombre = nombre
    body.especie = especie
    body.raza = raza
    body.internamiento = internamiento

    db.session.commit()
    return jsonify({"msj": "Mascota modificade"}), 200


# Delete Mascota
@api.route('/clientes/<int:id_cliente>/mascotas/<int:id_mascota>', methods=["DELETE"])
def delete_mascota(id_cliente, id_mascota):
    delete = Mascota.query.filter_by(
        cliente_id=id_cliente, id=id_mascota).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Mascota eliminada"}), 200


# ***********************ENPOINT FICHAS MEDICAS*************************
# ----------------------------------------------------------------------

# ficha historia clinica por mascota
@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/ficha', methods=["GET"])
def get_ficha(cliente_id, mascota_id):
    ficha = Ficha_Medica.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    return jsonify(ficha.serialize()), 200

# __agregar ficha historia clinica por mascota _______
#  POST


@api.route('/clientes/int:id:cliente/mascotas/int:id_mascota/ficha', methods=["POST"])
def add_ficha():
    body = request.get_json()
    ficha = Ficha_Medica(
        fecha=body["fecha"],
        motivo_consulta=body["motivo_consulta"],
        diagnostico=body["diagnostico"],
        estudios_medicos=body["estudios_medicos"],
        tratamiento=body["tratamiento"],
        recomendaciones=body["recomendaciones"]
    )
    db.session.add(ficha)
    db.session.commit()
    return jsonify({"msj": "Ficha agregada"}), 200


# ficha desparasitación por mascota
@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/desparasitacion', methods=["GET"])
def get_desparasitacion(cliente_id, mascota_id):
    desparasitacion = Desparasitacion.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    return jsonify(desparasitacion.serialize()), 200

# agregar desparasitacion por mascota

#  POST


@api.route('/clientes/int:id_cliente/mascotas/int:id_mascota/desparasitacion', methods=["POST"])
def add_desparasitacion():
    body = request.get_json()
    desparasitacion = Desparasitacion(
        fecha=body["fecha"],
        siguiente_aplicacion=body["siguiente_aplicacion"],
        peso=body["peso"], tipo_med=body["tipo_med"]
    )
    db.session.add(desparasitacion)
    db.session.commit()
    return jsonify({"msj": "Desparasitacion agregada"}), 200

# ficha vacunacion por mascota


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/vacunacion', methods=["GET"])
def get_vacunacion(cliente_id, mascota_id):
    vacunacion = Vacuna.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    return jsonify(vacunacion.serialize()), 200

# ___Agregar ficha de  vacuna por mascota ____

#  POST


@api.route('/clientes/int:id_cliente/animals/int:id_mascota/vacunacion', methods=["POST"])
def add_vacunacion():
    body = request.get_json()
    vacunacion = Vacuna(
        fecha=body["fecha"],
        siguiente_aplicacion=body["siguiente_aplicacion"],
        peso=body["peso"],
        tipo_vacuna=body["tipo_vacuna"],
        marca_vacuna=body["marca_vacuna"])
    db.session.add(vacunacion)
    db.session.commit()
    return jsonify({"msj": "Vacuna agregada"}), 200


# delete historia clinica
@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/ficha', methods=["DELETE"])
def delete_ficha(cliente_id, mascota_id):
    delete = Ficha_Medica.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Ficha eliminada eliminada"}), 200

# delete desparasitación


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/desparasitacion', methods=["DELETE"])
def delete_desparasitacion(cliente_id, mascota_id):
    delete = Desparasitacion.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Desparasitación eliminada"}), 200

# Delete Vacunacio


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/vacunacion', methods=["DELETE"])
def delete_vacunacion(cliente_id, mascota_id):
    delete = Vacuna.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Vacunacion eliminada"}), 200


# ***********************ENPOINT AGENDA*************************
# --------------------------------------------------------------

# agenda completa
@api.route('/agenda', methods=["GET"])
def get_agenda():
    agenda = Agenda.query.filter().all()
    result = list(map(lambda agenda: agenda.serialize(), agenda))
    print(result)
    response_body = {"Eventos": result, "msg": "total de eventos"}
    return jsonify(response_body), 200

# agenda por medico


@api.route('/agenda/<int:medico_id>', methods=["GET"])
def get_evento(medico_id):
    evento = Agenda.query.filter_by(medico_id=medico_id).first()
    return jsonify(evento.serialize()), 200

# __agregar a la agenda por medico____


@api.route('/agenda', methods=["POST"])  #  POST
def add_agenda():
    body = request.get_json()
    agenda = Agenda(
        fecha=body["fecha"],
        hora=body["hora"],
        retira=body["retira"],
        direccion_retiro=body["direccion_retiro"]
    )
    db.session.add(agenda)
    db.session.commit()
    return jsonify({"msj": "Agenda agregada"}), 200


# DELETE evento de agenda
@api.route('/agenda/<int:medico_id>/<int:id>', methods=["DELETE"])
def delete_evento(medico_id, id):
    delete = Agenda.query.filter_by(
        medico_id=medico_id, id=id).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Vacunacion eliminada"}), 200
