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
    print("*****************")
    print(email, password)
    user = User.query.filter().all()
    result = list(map(lambda user: user.serialize(), user))
    print("==================RESULT============>")
    print(result)
    for x in result:
        print("============X=============>")
        print(x["email"] + " " + x["password"])
        if (x["email"] == email) and (x["password"] == password):
            access_token = create_access_token(identity=email)
            return jsonify(access_token=access_token)
        else:
            return jsonify({"msg": "Bad email or password"}), 401


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
    final_result = []
    for x in result:
        mascota = Mascota.query.filter_by(cliente_id=x["id"]).first()
        mascota = mascota.serialize()
        x["nombre_mascota"] = mascota["nombre"]
        final_result.append(x)
    response_body = {"clientes": final_result,
                     "msg": "todos los clientes clientes"}
    return jsonify(response_body), 200


# lista por cada cliente
@api.route('/clientes/<int:id_cliente>', methods=["GET"])
def get_cliente(id_cliente):
    cliente = Cliente.query.get(id_cliente)
    return jsonify(cliente.serialize()), 200

# ____Agregar clientes___
@api.route('/clientes', methods=["POST"])
def add_cliente():
    nombre = request.json.get("nombre", None)
    telefono = request.json.get("telefono", None)
    direccion = request.json.get("direccion", None)
    nombre_mascota = request.json.get("nombre_mascota", None)
    especie = request.json.get("especie", None)
    raza = request.json.get("raza", None)
    internamiento = request.json.get("internamiento", None)
    user_id = request.json.get("user_id", None)

    if nombre is None:
        return jsonify({"msg": "Bad request"}), 400
    if telefono is None:
        return jsonify({"msg": "Bad request"}), 400
    if direccion is None:
        return jsonify({"msg": "Bad request"}), 400
    if nombre_mascota is None:
        return jsonify({"msg": "Bad request"}), 400
    if especie is None:
        return jsonify({"msg": "Bad request"}), 400
    if raza is None:
        return jsonify({"msg": "Bad request"}), 400
    if internamiento is None:
        return jsonify({"msg": "Bad request"}), 400
    if user_id is None:
        return jsonify({"msg": "Bad request"}), 400

    cliente = Cliente(nombre=nombre, telefono=telefono, direccion=direccion, user_id=user_id)
    db.session.add(cliente)
    db.session.commit()

    mascota = Mascota(nombre=nombre_mascota, especie=especie, raza=raza, internamiento=internamiento, cliente_id=cliente.id)
    db.session.add(mascota)
    db.session.commit()

    return jsonify("msg: Datos del cliente añadidos"), 200





# Delete cliente
@api.route('/clientes/<int:id_cliente>', methods=["DELETE"])
def delete_cliente(id_cliente):
    delete = Cliente.query.filter_by(id=id_cliente).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Cliente borrado"}), 200

# Put Cliente


@api.route('/clientes/<int:id>', methods=["PUT"])
def update_cliente(id):
    body = request.get_json()
    print(id)
    cliente = Cliente.query.filter(Cliente.id == id).update({
        Cliente.nombre: body["nombre"],
        Cliente.direccion: body["direccion"],
        Cliente.telefono: body["telefono"],
        Cliente.user_id: body["user_id"]}, synchronize_session=False)
    db.session.commit()
    return jsonify({"msj": "Cliente actualizado"}), 200


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
        telefono=body["telefono"],
        user_id=body["user_id"]
    )
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

# Put Medico


@api.route('/medicos/<int:id>', methods=["PUT"])
def update_medico(id):
    body = request.get_json()
    print(id)
    medico = Medico.query.filter(Medico.id == id).update({
        Medico.nombre: body["nombre"],
        Medico.telefono: body["telefono"],
        Medico.user_id: bdoy["user_id"]},
        synchronize_session=False)
    db.session.commit()
    return jsonify({"msj": "Medico actualizado"}), 200

# ***********************ENPOINT MASCOTAS*************************
# ---------------------------------------------------------------

# lista de mascotas


@api.route('/mascotas', methods=["GET"])
def get_mascotas():
    mascotas = Mascota.query.filter().all()
    result = list(map(lambda mascotas: mascotas.serialize(), mascotas))
    final_result = []
    for x in result:
        nombre = Cliente.query.filter_by(id=x["cliente_id"]).first()
        nombre = nombre.serialize()
        x["nombre_cliente"] = nombre["nombre"]
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

    # ___Agregar una Mascota a cliente____


@api.route('/clientes/<int:id_cliente>/mascotas/<int:id_mascota>', methods=["POST"])
def add_mascota(id_cliente, id_mascota):
    body = request.get_json()
    mascota = Mascota(
        nombre=body["nombre"],
        especie=body["especie"],
        raza=body["raza"],
        internamiento=body["internamiento"],
        cliente_id=id_cliente,

    )

    db.session.add(mascota)
    db.session.commit()
    return jsonify({"msj": "Mascota agregada"}), 200


# Delete Mascota
@api.route('/clientes/<int:id_cliente>/mascotas/<int:id_mascota>', methods=["DELETE"])
def delete_mascota(id_cliente, id_mascota):
    delete = Mascota.query.filter_by(
        cliente_id=id_cliente, id=id_mascota).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Mascota eliminada"}), 200

# Put Mascota


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
    return jsonify({"msj": "Mascota actualizada"}), 200


# ***********************ENPOINT FICHAS MEDICAS*************************
# ----------------------------------------------------------------------

# ficha historia clinica por mascota
@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/ficha', methods=["GET"])
def get_ficha(cliente_id, mascota_id):
    ficha = Ficha_Medica.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    return jsonify(ficha.serialize()), 200

# __agregar ficha historia clinica por mascota _______


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/ficha', methods=["POST"])
def add_ficha(cliente_id, mascota_id):
    body = request.get_json()
    ficha = Ficha_Medica(
        fecha=body["fecha"],
        motivo_consulta=body["motivo_consulta"],
        diagnostico=body["diagnostico"],
        estudios_medicos=body["estudios_medicos"],
        tratamiento=body["tratamiento"],
        recomendaciones=body["recomendaciones"],
        cliente_id=cliente_id,
        mascota_id=mascota_id,
        medico_id=body["medico_id"]
    )
    db.session.add(ficha)
    db.session.commit()
    return jsonify({"msj": "Ficha agregada"}), 200

# Put Ficha medica


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/ficha/<int:ficha_id>', methods=["PUT"])
def update_ficha(cliente_id, mascota_id, ficha_id):
    body = request.get_json()
    ficha_Medica = Ficha_Medica.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id, id=ficha_id).update({
            Ficha_Medica.diagnostico: body["diagnostico"],
            Ficha_Medica.estudios_medicos: body["estudios_medicos"],
            Ficha_Medica.fecha: body["fecha"],
            Ficha_Medica.id: body["id"],
            Ficha_Medica.motivo_consulta: body["motivo_consulta"],
            Ficha_Medica.recomendaciones: body["recomendaciones"],
            Ficha_Medica.tratamiento: body["tratamiento"]
        })
    db.session.commit()
    return jsonify({"msj": "Ficha Medica actualizada"}), 200

# ficha desparasitación por mascota_


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/desparasitacion', methods=["GET"])
def get_desparasitacion(cliente_id, mascota_id):
    desparasitacion = Desparasitacion.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    return jsonify(desparasitacion.serialize()), 200

# agregar desparasitacion por mascota

#  POST


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/desparasitacion', methods=["POST"])
def add_desparasitacion(cliente_id, mascota_id):
    body = request.get_json()
    desparasitacion = Desparasitacion(
        fecha=body["fecha"],
        siguiente_aplicacion=body["siguiente_aplicacion"],
        peso=body["peso"],
        tipo_med=body["tipo_med"],
        cliente_id=cliente_id,
        mascota_id=mascota_id
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

# ___Agregar ficha de  vacuna por mascota __
#  POST


@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/vacunacion', methods=["POST"])
def add_vacunacion(cliente_id, mascota_id):
    body = request.get_json()
    vacunacion = Vacuna(
        fecha=body["fecha"],
        siguiente_aplicacion=body["siguiente_aplicacion"],
        peso=body["peso"],
        tipo_vacuna=body["tipo_vacuna"],
        marca_vacuna=body["marca_vacuna"],
        cliente_id=cliente_id,
        mascota_id=mascota_id
    )
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


# Put Desparasitacion
@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/desparasitacion/<int:desparasitacion_id>', methods=["PUT"])
def update_desparasitacion(cliente_id, mascota_id, desparasitacion_id):
    body = request.get_json()
    desparasitacion = Desparasitacion.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id, id=desparasitacion_id).update({
            Desparasitacion.fecha: body["fecha"],
            Desparasitacion.id: body["id"],
            Desparasitacion.peso: body["peso"],
            Desparasitacion.siguiente_aplicacion: body["siguiente_aplicacion"],
            Desparasitacion.tipo_med: body["tipo_med"]
        })
    db.session.commit()
    return jsonify({"msj": "Desparasitacion actualizada"}), 200


# Delete Vacunacion
@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/vacunacion', methods=["DELETE"])
def delete_vacunacion(cliente_id, mascota_id):
    delete = Vacuna.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Vacunacion eliminada"}), 200


# Put Vacunacion
@api.route('/clientes/<int:cliente_id>/mascota/<int:mascota_id>/vacunacion/<int:vacuna_id>', methods=["PUT"])
def update_vacuna(cliente_id, mascota_id, vacuna_id):
    body = request.get_json()
    vacuna = Vacuna.query.filter_by(
        cliente_id=cliente_id, mascota_id=mascota_id, id=vacuna_id).update({
            Vacuna.fecha: body["fecha"],
            Vacuna.id: body["id"],
            Vacuna.marca_vacuna: body["marca_vacuna"],
            Vacuna.peso: body["peso"],
            Vacuna.siguiente_aplicacion: body["siguiente_aplicacion"],
            Vacuna.tipo_vacuna: body["tipo_vacuna"]
        })
    db.session.commit()
    return jsonify({"msj": "Vacuna actualizada"}), 200

# ***********************ENPOINT AGENDA*************************
# --------------------------------------------------------------

# agenda completa


@api.route('/agenda', methods=["GET"])
def get_agenda():
    agenda = Agenda.query.filter().all()
    result = list(map(lambda agenda: agenda.serialize(), agenda))
    final_result = []
    for x in result:
        cliente = Cliente.query.filter_by(id=x["cliente_id"]).first()
        nombre = cliente.serialize()
        x["nombre"] = nombre["nombre"]
        final_result.append(x)
    response_body = {"Eventos": final_result, "msg": "total de eventos"}
    return jsonify(response_body), 200

# agenda por medico


@api.route('/agenda/<int:medico_id>', methods=["GET"])
def get_evento(medico_id):
    evento = Agenda.query.filter_by(medico_id=medico_id).first()
    return jsonify(evento.serialize()), 200

# __agregar a la agenda por medico____


@api.route('/agenda/<int:medico_id>', methods=["POST"])  #  POST
def add_agenda(medico_id):
    body = request.get_json()
    agenda = Agenda(
        fecha=body["fecha"],
        hora=body["hora"],
        retira=body["retira"],
        direccion_retiro=body["direccion_retiro"],
        cliente_id=body["cliente_id"],
        medico_id=medico_id

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

# Put agenda


@api.route('/agenda/<int:medico_id>/<int:agenda_id>', methods=["PUT"])
def update_agenda(medico_id, agenda_id):
    body = request.get_json()
    agenda = Agenda.query.filter_by(
        medico_id=medico_id, id=agenda_id).update({
            Agenda.direccion_retiro: body["direccion_retiro"],
            Agenda.fecha: body["fecha"],
            Agenda.hora: body["hora"],
            Agenda.id: body["id"],
            Agenda.retira: body["retira"]

        })
    db.session.commit()
    return jsonify({"msj": "Agenda actualizada"}), 200
