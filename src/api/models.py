from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean

db = SQLAlchemy()

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
    veterinaria_id = db.Column(db.Integer, db.ForeignKey(
        'veterinaria.id'))
    user_type_id = db.Column(db.Integer, db.ForeignKey(
        'user_type.id'))
    user_type = db.relationship('User_type')
    veterinaria = db.relationship('Veterinaria')


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "vet_id": self.vet_id,
            "user_type_id": self.user_type_id
        }

""" class Medico(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    telefono = db.Column(db.Integer, unique=True, nullable=True)
    user_id = db.Column(db.Integer, ForeignKey(
        'user.id'))
    vet_id = db.Column(db.Integer, ForeignKey(
        'veterinaria.id'))
    cliente_id = db.Column(db.Integer, unique=True, nullable=True)

    def __repr__(self):
        return f'<Medico {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "vet_id": self.vet_id,
            "user_id": self.user_type_id,
            "cliente_id": self.cliente_id
        }

class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(250), unique=True, nullable=False)
    telefono = db.Column(db.String(80), unique=True, nullable=False)
    vet_id = db.Column(db.Integer, ForeignKey(
        'veterinaria.id'))
    user_id = db.Column(db.Integer, ForeignKey(
        'user.id'))
    medico_id = db.Column(db.Integer, unique=True, nullable=True)

    def __repr__(self):
        return f'<Cliente {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "direccion": self.direccion,
            "telefono": self.telefono,
            "user_id": self.user_type_id,
            "vet_id": self.vet_id,
            "medico_id": self.cliente_id
        } """