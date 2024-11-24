 
        function sendMessage() {  
            const userInput = document.getElementById('userInput');  
            const messageDiv = document.createElement('div');  
            messageDiv.className = 'message user';  
            messageDiv.textContent = userInput.value;  
            document.getElementById('messages').appendChild(messageDiv);  
            
            const xhr = new XMLHttpRequest();  
            xhr.open("POST", "/chat", true);  
            xhr.setRequestHeader("Content-Type", "application/json");  
            xhr.onload = function () {  
                if (xhr.status == 200) {  
                    const response = JSON.parse(xhr.responseText);  
                    const botMessageDiv = document.createElement('div');  
                    botMessageDiv.className = 'message bot';  
                    botMessageDiv.textContent = response.reply;  
                    document.getElementById('messages').appendChild(botMessageDiv);  
                }  
            };  
            xhr.send(JSON.stringify({ message: userInput.value }));  
            userInput.value = ''; // Clear input field  
        }  
  
