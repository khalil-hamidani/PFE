from flask import Flask,render_template, request
from flask_mysqldb import MySQL
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = '172.27.145.170'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'Test'
 
mysql = MySQL(app)
 
@app.route("/")
def form():
    
    return render_template('index.html')
 
@app.route("/Incident-report")
def incident():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM reports")
    fetchdata = cur.fetchall()
    cur.close()
    print(fetchdata)
    return render_template('index.html')

app.run(host='localhost', port=5000)