from fastapi import FastAPI
import uvicorn
import sys
import os
from fastapi.templating import Jinja2Templates
from starlette.responses import RedirectResponse
from fastapi.responses import Response
from textSummarizer.pipeline.prediction import PredictionPipeline
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import JSONResponse

class PredictRequest(BaseModel):
    text: str
    
text:str = "What is Text Summarization?"

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://text-summarization-psi.vercel.app/",
    # You can add more origins as needed, or use "*" to allow all origins
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/", tags=["authentication"])
async def index():
    return RedirectResponse(url="/docs")



@app.get("/train")
async def training():
    try:
        os.system("python main.py")
        return Response("Training successful !!")

    except Exception as e:
        return Response(f"Error Occurred! {e}")
    



@app.post("/predict")
async def predict_route(request_data: PredictRequest):
    try:
        obj = PredictionPipeline()
        # Use request_data.text to access the text attribute from the request
        prediction = obj.predict(request_data.text)
        return JSONResponse(content={"summary": prediction})
    except Exception as e:
        raise e
    

if __name__=="__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)