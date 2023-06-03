from flask import Flask, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = '172.27.145.170'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_password'] = ''
app.config['MYSQL_DB'] = 'Reports'
mySQL = MySQL(app)


# index route
@app.route("/")
def index():
    """
    Route function for the home page of the website.

    Returns:
    HTML webpage rendered with the index.html template.
    """
    return render_template("index.html")  # Renders the index.html template.


# report incident route
@app.route("/Incident-report")
def incident():
    """
    This function handles GET requests to the '/Incident-report' route.
    It inserts a new report into the 'reports' table in the database,
    and renders the 'Incident-report.html' template.
    """
    # Open a connection to the database
    # conn = mySQL.connect()

    # # Create a cursor object to execute SQL queries
    # curr = conn.cursor()

    # # Execute an INSERT query to add a new report to the 'reports' table
    # curr.execute("INSERT INTO reports (incident_type) VALUES (?)", 1)

    # # Commit the changes made to the database
    # conn.commit()

    # # Close the cursor object
    # curr.close()

    # try:
        # Reopen the connection to the database
        # conn = mySQL.connect()

        # Create a new cursor object to execute another SQL query
        # curr = conn.cursor()

        # Execute another INSERT query to add a new report to the 'reports' table
        # curr.execute("INSERT INTO reports (incident_type) VALUES (%s)")

        # Commit the changes made to the database
        # conn.commit()

        # Close the cursor object
        # curr.close()

        # Uncomment the following lines if you want to fetch and print the data from the 'reports' table
        # data = cursor.fetchall()
        # print(data)
    # except Exception as e:
        # Print any errors that occur while executing the SQL query
        # print(e)

    # Render the 'Incident-report.html' template
    return render_template("Incident-report.html")


# individual report route
@app.route("/Individual-report")
def individual_report():
    # Renders the HTML template for the Individual-report page.
    return render_template("Individual-report.html")


# individual report form route
@app.route("/Individual-report-form")
def individual_report_form():
    if request.method == "POST":
        # Render the HTML template for the individual report form and return it
        return render_template("Individual-report-form.html")
    else:
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("contact_email")
        telephone = request.form.get("telephone_number")
        age = request.form.get("age")
        address = request.form.get("address")
        Fname = request.form.get("F-name")
        Lname = request.form.get("L-name")
        Cname = request.form.get("C-name")
        email_address = request.form.get("email2")
        website = request.form.get("website")
        date = request.form.get("Date")


# business report route
@app.route("/Business-report")
def group_report():
    return render_template("Business-report.html")

# business report form route
@app.route("/Business-report-form")
def group_report_form():
    if request.method == "POST":
        return render_template("Business-report-form.html")
    else:
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("contact_email")
        telephone = request.form.get("telephone_number")
        age = request.form.get("age")
        address = request.form.get("address")
        organ_name = request.form.get("organ-name")
        organ_website = request.form.get("organ-website")
        Organ_address = request.form.get("Organ-address")
        F_name = request.form.get("F-name")
        L_name = request.form.get("L-name")
        C_name = request.form.get("C-name")
        email_address = request.form.get("email2")
        website = request.form.get("website")
        date = request.form.get("Date")

# government report route
@app.route("/Government-report")
def government_report():
    return render_template("Government-report.html")

# government report form route
@app.route("/Government-report-form")
def government_report_form():
     if request.method == "POST":
        return render_template("Government-report-form.html")
     else:
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("contact_email")
        telephone = request.form.get("telephone_number")
        age = request.form.get("age")
        organ_name = request.form.get("organ-name")
        organ_website = request.form.get("organ-website")
        F_name = request.form.get("F-name")
        L_name = request.form.get("L-name")
        C_name = request.form.get("C-name")
        email_address = request.form.get("email2")
        website = request.form.get("website")
        date = request.form.get("Date")

# report IOC route
@app.route("/IOC-report")
def ioc():
    return render_template("IOC-report.html")

""" create switch case in python """

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