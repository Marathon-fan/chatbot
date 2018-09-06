'''
Run RESTful Flask server to receive requests from client
'''

from flask import Flask, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from flask_restful import reqparse

from bot import bot

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route("/")
class Res(Resource):

    def get(self, uid):
        pass

    def post(self, uid):
        print('-----debug-----')
        print(self)
        print(uid)    
        userChatInfo = request.args.get("message")
        print(userChatInfo)
        response = bot.get_response(userChatInfo)
        print(response)
        if response.confidence < 0.5:
            return "I am not trained to respond to statements like these."
        return str(response)

    def put(self, uid):
        pass

    def delete(self, uid):
        pass

api.add_resource(Res, "/chatbot/<string:uid>")


if __name__ == "__main__":
    app.run()

#app.run(host='0.0.0.0', debug=True) # remove debug=True when finally deploying
