"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cliente, Medico, Mascota, Vacuna, Ficha_Medica,Desparasitacion, Agenda
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

# agregar Cliente nuevo
@api.route('/clientes', methods=["POST"])   # POST
def add_cliente():
    body = request.get_json()   
    cliente = Cliente(nombre=body["nombre"], direccion=body["direccion"], telefono=body["telefono"])                
    db.session.add(cliente)
    db.session.commit()
    return jsonify({"msj": "Cliente agregado"}), 200 


# Delete cliente
@api.route('/clientes/int:id:cliente', methods=["DELETE"])
def delete_cliente(id_cliente):
    delete = Clientes.query.filter_by(id_cliente=id_cliente).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Cliente borrado"}), 201

# ***********************ENPOINT MEDICOS*************************
# ---------------------------------------------------------------


# lista todos los médicos
@api.route('/medicos', methods=["GET"])
def get_medicos():
    medicos = Medicos.query.filter().all()
    result = list(map(lambda medicos: medicos.serialize(), medicos))
    response_body = {"medicos": result, "msg": "medicos"}
    return jsonify(response_body), 200

#agregar Medico nuevo
@api.route('/medicos', methods=["POST"])   # POST
def add_medico():
    body = request.get_json()   
    medico = Medico(nombre=body["nombre"], telefono=body["telefono"])                
    db.session.add(medico)
    db.session.commit()
    return jsonify({"msj": "Medico agregado"}), 200 


@api.route('/medicos/int:id:medico', methods=["GET"])
def get_doctor(id_medico):
    medico = Medicos.query.get(id_medico)
    return jsonify(medico.serialize(),{"msj": "Medico agregado"}), 200

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
    mascota = Mascotas.query.filter().all()
    result = list(map(lambda mascotas: mascotas.serialize(), mascotas))
    response_body = {"mascotas": result, "msg": "mascotas"}
    return jsonify(response_body), 200


# lista mascotas por cada cliente
@api.route('/clientes/int:id_cliente/mascotas', methods=["GET"])
def get_mascota(client_id):
    mascota = Mascotas.query.get(id_mascota)
    return jsonify(mascotas), 200

# lista una mascota de un cliente
@api.route('/clientes/int:id_cliente/mascotas/int:id_mascota', methods=["GET"])
def get_una_mascota(id_cliente, id_mascota):
    mascota = Mascota.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    return jsonify(mascota.serialize()), 200


#agregar mascotas nuevas
@api.route('/mascotas', methods=["POST"])   # POST
def add_mascota():
    body = request.get_json()   
    mascota = Mascota(nombre=body["nombre"], especie=body["especie"], raza=body["raza"], internamiento=body["internamiento"])                
    db.session.add(mascota)
    db.session.commit()
    return jsonify({"msj": "Mascota agregada"}), 200 

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

#__________________________________agregar ficha POST_______
@api.route('/clientes/int:id:cliente/mascotas/int:id_mascota/ficha', methods=["POST"])   # POST
def add_ficha():
    body = request.get_json()   
    ficha = Ficha_Medica(fecha=body["fecha"], motivo_consulta=body["motivo_consulta"], diagnostico=body["diagnostico"], estudios_medicos=body["estudios_medicos"], tratamiento=body["tratamiento"], recomendaciones=body["recomendaciones"])                
    db.session.add(ficha)
    db.session.commit()
    return jsonify({"msj": "Ficha agregada"}), 200 

# ficha desparasitación por mascota
@api.route('/clientes/int:id_cliente/mascotas/int:id_mascota/desparasitacion', methods=["GET"])
def get_desparasitacion(id_cliente, id_mascota):
    desparasitacion = Desparasitacion.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    return jsonify(desparasitacion.serialize()), 200

# agregar desparasitacion
@api.route('/clientes/int:id_cliente/mascotas/int:id_mascota/desparasitacion', methods=["POST"])   # POST
def add_desparasitacion():
    body = request.get_json()   
    desparasitacion = Desparasitacion(fecha=body["fecha"], siguiente_aplicacion=body["siguiente_aplicacion"], peso=body["peso"], tipo_med=body["tipo_med"])                
    db.session.add(desparasitacion)
    db.session.commit()
    return jsonify({"msj": "Desparasitacion agregada"}), 200 

@api.route('/clientes/int:id_cliente/animals/int:id_mascota/vacunacion', methods=["GET"])
def get_vacunacion(id_cliente, id_mascota):
    vacunacion = Vacunacion.query.filter_by(
        id_cliente=id_cliente, id_mascota=id_mascota).first()
    return jsonify(vacunacion.serialize()), 200

#__________________________________agregar vacuna POST_______
@api.route('/clientes/int:id_cliente/animals/int:id_mascota/vacunacion', methods=["POST"])   # POST
def add_vacunacion():
    body = request.get_json()   
    vacunacion = Vacuna(fecha=body["fecha"], siguiente_aplicacion=body["siguiente_aplicacion"], peso=body["peso"], tipo_vacuna=body["tipo_vacuna"], marca_vacuna=body["marca_vacuna"])                
    db.session.add(vacunacion)
    db.session.commit()
    return jsonify({"msj": "Vacuna agregada"}), 200 



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
@api.route('/agenda', methods=["GET"])
def get_agenda():
    agenda = Agenda.query.filter().all()
    result = list(map(lambda agenda: agenda.serialize(), agenda))
    print(result)
    response_body = {"Eventos": result, "msg": "total de eventos"}
    return jsonify(response_body), 200
#_________________________agregar a la agenda_____________
@api.route('/agenda', methods=["POST"])   # POST
def add_agenda():
    body = request.get_json()   
    agenda = Agenda(fecha=body["fecha"], hora=body["hora"],  retira=body["retira"], direccion_retiro=body["direccion_retiro"])                
    db.session.add(agenda)
    db.session.commit()
    return jsonify({"msj": "Agenda agregada"}), 200 

# agenda por medico
@api.route('/agenda/<int:medico_id>', methods=["GET"])
def get_evento(medico_id):
    evento = Agenda.query.filter_by(medico_id=medico_id).first()
    return jsonify(evento.serialize()), 200

# DELETE evento de agenda

@api.route('/agenda/<int:medico_id>/<int:id>', methods=["DELETE"])
def delete_evento(medico_id, id):
    delete = Agenda.query.filter_by(
        medico_id=medico_id, id=id).first()
    db.session.delete(delete)
    db.session.commit()
    return jsonify({"msj": "Vacunacion eliminada"}), 200

