import openai  
from flask import Flask, request, jsonify, render_template  

app = Flask(__name__)  

# Configura tu clave de API  
openai.api_key = 'TU_CLAVE_DE_API'  

@app.route('/')  
def index():  
    return render_template('index.html')  

@app.route('/chat', methods=['POST'])  
def chat():  
    user_input = request.json.get('message')  
    response = openai.ChatCompletion.create(  
        model="gpt-3.5-turbo",  
        messages=[{"role": "user", "content": user_input}]  
    )  
    reply = response['choices'][0]['message']['content']  
    return jsonify({'reply': reply})  

if __name__ == '__main__':  
    app.run(debug=True)








































    