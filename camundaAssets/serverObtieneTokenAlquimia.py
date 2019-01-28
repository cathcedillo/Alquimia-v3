import cherrypy
import simplejson
import requests
import json

class Root(object):
    @cherrypy.expose
    def obtieneTokenAlquimia(self):
        url = "https://apvitae.alquimiadigital.mx/cpanel/index.php/api/oauth2/token"
        payload = "grant_type=password&username=administracion%40demomatic.com&password=acceso_7h8j9k0l!!&undefined="
        headers = {
            'Content-Type': "application/x-www-form-urlencoded",
            'Authorization': "Basic dGVzdGNsaWVudDp0ZXN0cGFzcw==",
            'cache-control': "no-cache",
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        body = simplejson.loads(response.text)
        #print(body)
        return json.dumps(body)

    @cherrypy.expose
    def index(self):
        return """
		nada que ver aqui
		"""
    		
if __name__ == '__main__':
    config = {'server.socket_host': '0.0.0.0','server.socket_port': 8081}
    cherrypy.config.update(config)
    cherrypy.quickstart(Root())
