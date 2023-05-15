from flask import Flask, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_password'] = ''
app.config['MYSQL_DB'] = 'ACSC'

# index route
@app.route("/")
def index():
    return render_template("index.html")

# report incident route
@app.route("/Incident-report")
def incident():
    return render_template("Incident-report.html")

# individual report route
@app.route("/Individual-report")
def individual_report():
    return render_template("Individual-report.html")

# individual report form route
@app.route("/Individual-report-form")
def individual_report_form():
    return render_template("Individual-report-form.html")

# business report route
@app.route("/Business-report")
def group_report():
    return render_template("Business-report.html")

# business report form route
@app.route("/Business-report-form")
def group_report_form():
    return render_template("Business-report-form.html")

# government report route
@app.route("/Government-report")
def government_report():
    return render_template("Government-report.html")

# government report form route
@app.route("/Government-report-form")
def government_report_form():
    return render_template("Government-report-form.html")

# report IOC route
@app.route("/IOC-report")
def ioc():
    return render_template("IOC-report.html")

# match type:
#     case 1:
#         value = kfds;fjdl
# db.execute("incert into {value} ",)


# report IOC form route
@app.route("/IOC-report-form")
def ioc_form():
    return render_template("IOC-report-form.html")
# scan route
# @app.route("/scan")
# def scan():
#     return render_template(".html")


# # report IOC form route
# @app.route("/fill" , methods=['POST'])
# def ioc_form():
#     return render_template("IOC-report-form.html")


if __name__ == "__main__":
    app.run(debug=True)