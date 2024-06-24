from sqlalchemy.orm import Session
from app import models


def get_agent(db: Session, agent_id: int):
    return db.query(models.Agent).filter(models.Agent.id == agent_id).first()


def get_agents(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Agent).offset(skip).limit(limit).all()


def create_agent(db: Session, agent: models.Agent):
    db.add(agent)
    db.commit()
    db.refresh(agent)
    return agent


def update_agent(db: Session, agent_id: int, name: str, description: str):
    agent = db.query(models.Agent).filter(models.Agent.id == agent_id).first()
    if agent:
        agent.name = name
        agent.description = description
        db.commit()
        db.refresh(agent)
    return agent


def delete_agent(db: Session, agent_id: int):
    agent = db.query(models.Agent).filter(models.Agent.id == agent_id).first()
    if agent:
        db.delete(agent)
        db.commit()
    return agent
