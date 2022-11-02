"""empty message

Revision ID: 3e697112307d
Revises: 858c05aef7c7
Create Date: 2022-11-02 16:41:31.184806

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e697112307d'
down_revision = '858c05aef7c7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('vacuna',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('fecha', sa.Date(), nullable=False),
    sa.Column('siguiente_aplicacion', sa.Date(), nullable=False),
    sa.Column('peso', sa.Integer(), nullable=False),
    sa.Column('tipo_vacuna', sa.String(length=120), nullable=False),
    sa.Column('marca_vacuna', sa.String(length=120), nullable=False),
    sa.Column('mascota_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['mascota_id'], ['mascota.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('vacuna')
    # ### end Alembic commands ###
