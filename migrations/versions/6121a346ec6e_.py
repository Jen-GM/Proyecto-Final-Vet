"""empty message

Revision ID: 6121a346ec6e
Revises: ea9067d31e7f
Create Date: 2022-11-03 02:47:35.394664

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6121a346ec6e'
down_revision = 'ea9067d31e7f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('veterinaria_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'user', 'veterinaria', ['veterinaria_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='foreignkey')
    op.drop_column('user', 'veterinaria_id')
    # ### end Alembic commands ###
