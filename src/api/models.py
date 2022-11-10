from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, Table, Integer, String, Float, Boolean, Date, Time

db = SQLAlchemy()
Base = declarative_base()


class User_type(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rol = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<User_type {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "rol": self.rol
        }


class Veterinaria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    vet_name = db.Column(db.String(80), unique=False, nullable=False)
    direccion = db.Column(db.String(250), unique=True, nullable=False)
    telefono = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return f'<Veterinaria {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "vet_name": self.vet_name,
            "direccion": self.direccion,
            "telefono": self.telefono
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_type_id = db.Column(db.Integer, db.ForeignKey(
        'user_type.id'))
    user_type = db.relationship('User_type')
    veterinaria_id = db.Column(db.Integer, db.ForeignKey(
        'veterinaria.id'))
    veterinaria = db.relationship('Veterinaria')

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "user_type_id": self.user_type_id,
            "veterinaria_id": self.veterinaria_id
        }


class Medico(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    telefono = db.Column(db.String(80), unique=True, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey(
        'user.id'))
    id_user = db.relationship('User')

    def __repr__(self):
        return f'<Medico {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "telefono": self.telefono,
            "user_id": self.user_id
        }


class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(250), unique=True, nullable=False)
    telefono = db.Column(db.String(80), unique=True, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey(
        'user.id'), unique=True, nullable=False)
    id_user = db.relationship('User')

    def __repr__(self):
        return f'<Cliente {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "direccion": self.direccion,
            "telefono": self.telefono,
            "user_id": self.user_id
        }


class Agenda(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.Date, unique=False, nullable=False)
    hora = db.Column(db.Time, unique=True, nullable=False)
    retira = db.Column(db.Boolean, unique=False, nullable=False)
    direccion_retiro = db.Column(db.String(250), unique=False, nullable=True)
    medico_id = db.Column(db.Integer, ForeignKey(
        'medico.id'))
    medico = db.relationship('Medico')
    cliente_id = db.Column(db.Integer, ForeignKey(
        'cliente.id'))
    cliente = db.relationship('Cliente')

    def __repr__(self):
        return f'<Agenda {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "hora": self.hora.strftime("%H:%M"),
            "retira": self.retira,
            "direccion_retiro": self.direccion_retiro,
            "medico_id": self.medico_id,
            "cliente_id": self.cliente_id
        }


class Mascota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    especie = db.Column(db.String(100), unique=False, nullable=False)
    raza = db.Column(db.String(100), unique=False, nullable=False)
    internamiento = db.Column(db.Boolean, unique=False, nullable=False)
    cliente_id = db.Column(db.Integer, ForeignKey(
        'cliente.id'))
    cliente = db.relationship('Cliente')

    def __repr__(self):
        return f'<Mascota {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "especie": self.especie,
            "raza": self.raza,
            "internamiento": self.internamiento,
            "cliente_id": self.cliente_id
        }


class Desparasitacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.Date, unique=False, nullable=False)
    siguiente_aplicacion = db.Column(db.Date, unique=False, nullable=False)
    peso = db.Column(db.Float, unique=False, nullable=False)
    tipo_med = db.Column(db.String(120), unique=False, nullable=False)
    cliente_id = db.Column(db.Integer, ForeignKey(
        'cliente.id'))
    cliente = db.relationship('Cliente')
    mascota_id = db.Column(db.Integer, ForeignKey(
        'mascota.id'))
    mascota = db.relationship('Mascota')

    def __repr__(self):
        return f'<Desparasitacion {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "siguiente_aplicacion": self.siguiente_aplicacion,
            "peso": self.peso,
            "tipo_med": self.tipo_med,
            "cliente_id": self.cliente_id,
            "mascota_id": self.mascota_id
        }


class Vacuna(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.Date, unique=False, nullable=False)
    siguiente_aplicacion = db.Column(db.Date, unique=False, nullable=False)
    peso = db.Column(db.Float, unique=False, nullable=False)
    tipo_vacuna = db.Column(db.String(120), unique=False, nullable=False)
    marca_vacuna = db.Column(db.String(120), unique=False, nullable=False)
    cliente_id = db.Column(db.Integer, ForeignKey(
        'cliente.id'))
    cliente = db.relationship('Cliente')
    mascota_id = db.Column(db.Integer, ForeignKey(
        'mascota.id'))
    mascota = db.relationship('Mascota')

    def __repr__(self):
        return f'<Vacuna {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "siguiente_aplicacion": self.siguiente_aplicacion,
            "peso": self.peso,
            "tipo_vacuna": self.tipo_vacuna,
            "marca_vacuna": self.marca_vacuna,
            "cliente_id": self.cliente_id,
            "mascota_id": self.mascota_id
        }


class Ficha_Medica(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.Date, unique=False, nullable=False)
    motivo_consulta = db.Column(db.String(255), unique=False, nullable=False)
    diagnostico = db.Column(db.String(255), unique=False, nullable=False)
    estudios_medicos = db.Column(db.String(255), unique=False, nullable=True)
    tratamiento = db.Column(db.String(255), unique=False, nullable=False)
    recomendaciones = db.Column(db.String(255), unique=False, nullable=True)
    cliente_id = db.Column(db.Integer, ForeignKey(
        'cliente.id'))
    cliente = db.relationship('Cliente')
    mascota_id = db.Column(db.Integer, ForeignKey(
        'mascota.id'))
    mascota = db.relationship('Mascota')
    medico_id = db.Column(db.Integer, ForeignKey(
        'medico.id'))
    medico = db.relationship('Medico')

    def __repr__(self):
        return f'<Ficha_medica {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "motivo_consulta": self.motivo_consulta,
            "diagnostico": self.diagnostico,
            "estudios_medicos": self.estudios_medicos,
            "tratamiento": self.tratamiento,
            "recomendaciones": self.recomendaciones,
            "cliente_id": self.cliente_id,
            "mascota_id": self.mascota_id
        }
