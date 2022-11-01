from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import Column, ForeignKey, Table, Integer, String, Boolean

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
    

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "user_type_id": self.user_type_id,
            "veterinaria_id": self.veterinaria_id
        }

association_table = Table(
    "association_Med_Cli",
    Base.metadata,
    Column("medico_id", ForeignKey("medico.id")),
    Column("cliente_id", ForeignKey("cliente.id")),
)

class Medico(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    telefono = db.Column(db.String(80), unique=True, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey(
        'user.id'))
    user = db.relationship('User')
    clientes = relationship("Cliente",
                    secondary=association_table,
                    back_populates="medicos")


    def __repr__(self):
        return f'<Medico {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "telefono": self.telefono,
            "user_id": self.user_id,
            "clientes": list(map(lambda x: x.serialize(), self.clientes))
        }

class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(250), unique=True, nullable=False)
    telefono = db.Column(db.String(80), unique=True, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey(
        'user.id'))
    user = db.relationship('User')
        

    def __repr__(self):
        return f'<Cliente {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "direccion": self.direccion,
            "telefono": self.telefono,
            "user_id": self.user_type_id
        }