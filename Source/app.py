from flask import Flask, render_template


app = Flask(__name__)

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


# report IOC form route
@app.route("/IOC-report-form")
def ioc_form():
    return render_template("IOC-report-form.html")
# scan route
# @app.route("/scan")
# def scan():
#     return render_template(".html")


if __name__ == "__main__":
    app.run(debug=True)