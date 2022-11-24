"""empty message

Revision ID: cd5f73aeb94d
Revises: 8ab38496e42f
Create Date: 2022-11-02 01:06:23.276242

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cd5f73aeb94d'
down_revision = '8ab38496e42f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mascota',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('especie', sa.String(length=100), nullable=False),
    sa.Column('raza', sa.String(length=100), nullable=False),
    sa.Column('internamiento', sa.Boolean(), nullable=False),
    sa.Column('cliente_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['cliente_id'], ['cliente.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nombre')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('mascota')
    # ### end Alembic commands ###
