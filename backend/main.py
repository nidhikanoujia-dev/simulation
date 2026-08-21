from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176",
        "http://localhost:5177",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "http://127.0.0.1:5175",
        "http://127.0.0.1:5176",
        "http://127.0.0.1:5177",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


current_scenario = None


@app.get("/")
def root():
    return {
        "status": "backend running"
    }


@app.get("/api/mission")
def get_mission():
    return {
        "mission": "Mars Digital Twin",
        "status": "nominal",
        "scenario": current_scenario
    }


@app.post(
    "/api/scenario/oxygen-leak"
)
def oxygen_leak():

    global current_scenario

    current_scenario = "oxygen_leak"

    return {
        "scenario": "oxygen_leak",
        "status": "critical",
        "system": "life_support",
        "message": "Oxygen Leak Detected",
        "oxygen": 62,
        "pressure": "LOW",
        "temperature": 21
    }


@app.post(
    "/api/scenario/power-failure"
)
def power_failure():

    global current_scenario

    current_scenario = "power_failure"

    return {
        "scenario": "power_failure",
        "status": "critical",
        "system": "power",
        "message": "Power Generation Failure",
        "power_output": 0.0,
        "battery": 31,
        "temperature": 41
    }


@app.post(
    "/api/scenario/reset"
)
def reset_scenario():

    global current_scenario

    current_scenario = None

    return {
        "scenario": None,
        "status": "normal",
        "message": "Simulation reset"
    }