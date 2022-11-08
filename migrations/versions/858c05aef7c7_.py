"""empty message

Revision ID: 858c05aef7c7
Revises: cc96ffdf160c
Create Date: 2022-11-02 16:35:50.179239

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '858c05aef7c7'
down_revision = 'cc96ffdf160c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('desparasitacion', sa.Column('siguiente_aplicacion', sa.Date(), nullable=False))
    op.add_column('desparasitacion', sa.Column('tipo_med', sa.String(length=120), nullable=False))
    op.drop_constraint('desparasitacion_nombre_key', 'desparasitacion', type_='unique')
    op.drop_column('desparasitacion', 'nombre')
    op.drop_column('desparasitacion', 'tipo_desp')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('desparasitacion', sa.Column('tipo_desp', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.add_column('desparasitacion', sa.Column('nombre', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.create_unique_constraint('desparasitacion_nombre_key', 'desparasitacion', ['nombre'])
    op.drop_column('desparasitacion', 'tipo_med')
    op.drop_column('desparasitacion', 'siguiente_aplicacion')
    # ### end Alembic commands ###