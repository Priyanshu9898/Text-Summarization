## Text summarization
This project introduces an innovative approach to abstractive text summarization, focusing on conversational text using the Pegasus model and the SAMSum dataset. The SAMSum corpus, known for its informal and interactive style, presents unique challenges not typically addressed by standard summarization models. The approach includes a thorough preprocessing of SAMSum, aligning it with Pegasus's input requirements, followed by detailed fine-tuning. This process integrates hyperparameter optimization, adaptive transfer learning, and a focused training regimen, emphasizing the preservation of conversational context. The model's effectiveness is evaluated using both objective metrics like ROUGE-N, ROUGE-L, and BLEU, and subjective human assessments, ensuring the summaries' coherence, relevance, and readability. The results show a notable improvement in summarizing conversational texts, surpassing existing benchmarks and contributing significantly to NLP, particularly in enhancing dialogue summarization and model adaptability in domain-specific contexts.

### Frontend URL: https://text-summarization-psi.vercel.app/
### Backend URL: 

## Technology Stack
### Frontend:
- Nextjs 14
- TypeScript
- TailwindCSS
- Shadcn.UI
### Backend:
- Python
- DVC
- MLFlow
- Transformers & HuggingFace
- FastAPI
- OOP Principles

### Project's Features
- #### Advanced Summarization Capabilities:
  Fine-tuned Pegasus model to summarize conversational texts with high accuracy.
- #### Contextual Understanding:
  Special focus on maintaining the integrity and context of the original conversation in the summaries.
- #### Optimized for Conversational Data:
  Utilization of the SAMSum dataset ensures the model is specifically trained for dialogue-based texts.
- #### Comprehensive Model Evaluation:
  Rigorous testing using both objective metrics and subjective human assessments to ensure the quality of summaries.
- #### User-Friendly Interface:
  Incorporation of a frontend with technologies like Next.js and TailwindCSS for ease of use and accessibility.
- #### Logging and Custom Exception Handling:
  The system incorporates extensive logging and custom exception handling mechanisms to monitor the application's performance, detect issues, and ensure a seamless user experience. These mechanisms provide detailed information on errors, warnings, and system events, enabling developers to troubleshoot and improve the system continuously.

## Dataset Information
The SAMSum dataset, central to this project, is a collection of conversational texts designed specifically for summarization tasks. It includes a variety of dialogue-based texts, providing a rich resource for training models to understand and summarize conversational nuances effectively.

### Dataset Link: https://huggingface.co/datasets/samsum

### Pegasus Model on Hugging Face (CNN/DailyMail)

#### Overview
Pegasus is an advanced text summarization model developed by Google and available on Hugging Face. It uses a Transformer-based architecture, specifically optimized for abstractive text summarization tasks.

### Unique Features
- **Pre-training Technique:** Pegasus is pre-trained with a novel gap-sentence objective, enhancing its ability to generate coherent and concise summaries.
- **Abstractive Summarization:** Unlike extractive models, Pegasus paraphrases and condenses the original text, providing more fluent and readable summaries.

#### Fine-Tuning on CNN/DailyMail
The model has been fine-tuned on the CNN/DailyMail dataset, a collection of news articles, making it particularly effective for summarizing journalistic content.

#### Performance and Evaluation
- **Objective Metrics:** The model's performance is evaluated using metrics like ROUGE-N, ROUGE-L, and BLEU.
- **Subjective Assessments:** In addition to objective metrics, subjective human assessments are used to ensure the quality of summaries in terms of coherence, relevance, and readability.

#### Applications
Ideal for applications in news summarization and other domains requiring concise representation of textual content.

#### Further Information
For more details, visit the [Hugging Face Pegasus model page](https://huggingface.co/google/pegasus-cnn_dailymail).


## Workflows

1. Update config.yaml
2. Update secrets.yaml [Optional]
3. Update params.yaml
4. Update the entity
5. Update the configuration manager in src config
6. Update the components
7. Update the pipeline 
8. Update the main.py
9. Update the dvc.yaml
10. app.py

# How to run Backend?
### STEPS:

Clone the repository

```bash
git clone https://github.com/Priyanshu9898/Text-Summarization.git
```
### STEP 01- Create a Python environment after opening the repository

```bash
cd Text-Summarization
cd backend
python -m venv env
```

```bash
env\Scripts\activate
```


### STEP 02- install the requirements
```bash
pip install -r requirements.txt
```
### STEP 03- Run the Flask Backend
```bash
python app.py
```
### STEP 04- Run the Training Pipeline
```bash
python main.py
```

# How to run Frontend?
### STEP 01- Go to client
```bash
cd frontend
```
### STEP 02- install the requirements
```bash
npm install
```

### STEP 03- Run the NextJS frontend
```bash
npm run dev
```

### STEP 04- Build the frontend
```bash
npm run build
```

# Pegasus Model Performance

| Model   | ROUGE-1   | ROUGE-2 | ROUGE-L | ROUGE-Lsum |
|---------|-----------|---------|---------|------------|
| Pegasus | 0.024595  | 0.0     | 0.024311| 0.024418   |


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://priyanshumalaviya.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/priyanshumalaviya/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Priyanshu2281)
[![Medium](https://img.shields.io/badge/medum-1DA1F2?style=for-the-badge&logo=medium&logoColor=black)](https://medium.com/@priyanshumalaviya9210)
## Demo

Insert gif or link to demo


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License
