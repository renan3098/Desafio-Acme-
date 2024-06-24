from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class AgentBase(BaseModel):
    name: str
    description: Optional[str] = None


class AgentCreate(AgentBase):
    pass


class Agent(AgentBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
