from flask import Flask, request, render_template , redirect
from flask_mysqldb import MySQL
from livereload import Server
import os
import re

app = Flask(__name__)
app.debug = True
live_server = Server(app.wsgi_app)
live_server.watch('static/css/*.css')
live_server.watch('templates/*.html')


# database connection 1 [IOC]
app.config['MYSQL_HOST'] = '172.27.145.170'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_password'] = ''
app.config['MYSQL_DB'] = 'IOC'
mySQL = MySQL(app)

 
# index route
@app.route("/", methods=["GET"])
def index():
    """
    Route function for the home page of the website.

    Returns:
        A rendered HTML webpage with the index.html template.
    """
    if request.method == "GET":
        # Renders the index.html template.
        return render_template("index.html")
   
   
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
@app.route("/Individual-report" , methods=["GET"])
def individual_report():
    """
    Defines the route for the "Individual-report" page and renders the HTML template
    for it upon GET request.
    
    Args:
        None
        
    Returns:
        The rendered HTML template for the "Individual-report" page.
    """
    if request.method == "GET":
        # Renders the HTML template for the Individual-report page.
        return render_template("Individual-report.html")


# individual report form route
@app.route("/Individual-report-form", methods=["GET", "POST"])
def individual_report_form():
    """
    Renders the HTML template for the individual report form and handles its submission.

    Returns:
        rendered HTML template for the submission confirmation page.
    """
    if request.method == "GET":
        # Render the HTML template for the individual report form and return it
        return render_template("Individual-report-form.html")
    else:
        # Get form data
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("contact_email")
        telephone = request.form.get("telephone_number")
        age = request.form.get("age") or 0
        gender = request.form.get("gender")
        role = request.form.get("role")
        address = request.form.get("address")
        Fname = request.form.get("F-name")
        Lname = request.form.get("L-name")
        Cname = request.form.get("C-name")
        country = request.form.get("country")
        email_address = request.form.get("email2")
        website = request.form.get("website")
        date = request.form.get("Date")
        incident_type = request.form.get("type")
        other = request.form.get("otherissue")
        description = request.form.get("message")

        # Check if any of the required fields are empty
        if not (first_name and last_name and email and date and description):
            # Render the HTML template for the error page and return it
            return render_template("error.html")

        # If incident type is not provided, set it to 'other'
        if not incident_type:
            incident_type = other

        # Open a connection to the database
        cur = mySQL.connection.cursor()
        cur.execute("USE Personal_reports")

        # Insert the data into the 'Complainants' table
        cur.execute(
            "INSERT INTO Personal_reports.Complainants (first_name, last_name, email, telephone , age, gender, role, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
            (first_name, last_name, email, telephone, age, gender, role, address)
        )
        complainant_id = cur.lastrowid

        # Insert the data into the 'Complained_Against' table
        cur.execute(
            "INSERT INTO Personal_reports.Complained_Against (first_name, last_name, company_name, country, email_address, website, complainant_id) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (Fname, Lname, Cname, country, email_address, website, complainant_id)
        )

        file_path = "reports/Personal_reports/"

        # Insert the data into the 'Complaints' table
        cur.execute(
            "INSERT INTO Personal_reports.Complaints (incident_date,incident_type, description,file_path, complainant_id) VALUES (%s, %s, %s, %s, %s)",
            (date, incident_type, description, file_path, complainant_id)
        )
        # Commit the changes made to the database
        mySQL.connection.commit()

        # Close the cursor object
        cur.close()

        # Render the HTML template for the submission confirmation page and return it
        return render_template("submission.html")
        


# business report route
@app.route("/Business-report")
def group_report():
    return render_template("Business-report.html")


# business report form route
@app.route("/Business-report-form" , methods=["GET", "POST"])
def group_report_form():
    if request.method == "GET":
        return render_template("Business-report-form.html")
    else:
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("contact_email")
        telephone = request.form.get("telephone_number")
        age = request.form.get("age") or 0
        gender = request.form.get("gender")
        address = request.form.get("address")
        company_name = request.form.get("company-name")
        company_website = request.form.get("company-website")
        company_address = request.form.get("company-address")
        company_email = request.form.get("company-email")
        company_type = request.form.get("type")
        role = request.form.get("role")
        Fname = request.form.get("F-name")
        Lname = request.form.get("L-name")
        Cname = request.form.get("C-name")
        country = request.form.get("country")
        email_address = request.form.get("email2")
        website = request.form.get("website")
        date = request.form.get("Date")
        incident_type = request.form.get("type")
        other = request.form.get("otherissue")
        description = request.form.get("message")
        
        if not (first_name and last_name and email and date and description):
            # Render the HTML template for the error page and return it
            return render_template("error.html")

        # If incident type is not provided, set it to 'other'
        if not incident_type:
            incident_type = other

        # Open a connection to the database
        cur = mySQL.connection.cursor()
        # use the Buissnesses_reports database
        cur.execute("USE Buissnesses_reports")
        # Insert the data into the 'Complainants' table
        cur.execute(
            "INSERT INTO Buissnesses_reports.Complainants (first_name, last_name, email, telephone , age, gender, address) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (first_name, last_name, email, telephone, age, gender, address)
        )
        complainant_id = cur.lastrowid

        # Insert the data into the 'Complained_Against' table
        cur.execute(
            "INSERT INTO Buissnesses_reports.Complained_Against (first_name, last_name, company_name, country, email_address, website, complainant_id) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (Fname, Lname, Cname, country, email_address, website, complainant_id)
        )

        # insert the data into the 'Companies' table
        cur.execute(
            "INSERT INTO Buissnesses_reports.Companies (company_name, company_website, company_address, company_email, company_type, role, complainant_id) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (company_name, company_website, company_address, company_email, company_type, role, complainant_id)
        )

        file_path = "reports/Personal_reports/"

        # Insert the data into the 'Complaints' table
        cur.execute(
            "INSERT INTO Buissnesses_reports.Complaints (incident_date,incident_type, description,file_path, complainant_id) VALUES (%s, %s, %s, %s, %s)",
            (date, incident_type, description, file_path, complainant_id)
        )
        # Commit the changes made to the database
        mySQL.connection.commit()

        # Close the cursor object
        cur.close()

        # Render the HTML template for the submission confirmation page and return it
        return render_template("submission.html")


# government report route
@app.route("/Government-report")
def government_report():
    return render_template("Government-report.html")


# government report form route
@app.route("/Government-report-form")
def government_report_form():
     """
     This function handles the GET and POST requests for the /Government-report-form route. If the request is a GET request, it
     returns the rendered "Government-report-form.html" template. If the request is a POST request, it retrieves the data from the
     form fields and assigns them to their respective variables. The function does not take any parameters. Upon a successful POST
     request, no return type is specified.
     """
     if request.method == "GET":
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
    """
    This function is a route decorator that maps the URL "/IOC-report" to this function.
    When a request is made using this URL, it returns the rendered template "IOC-report.html".
    """
    return render_template("IOC-report.html")


# match type:
#     case 1:
#         value = kfds;fjdl
# db.execute("incert into {value} ",)


# report IOC form route
@app.route("/IOC-report-form", methods=["GET", "POST"])
def ioc_form():
    if request.method == "GET":
        return render_template("IOC-report-form.html")
    else:
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("contact_email")
        telephone = request.form.get("telephone_number")
        website = request.form.get("url")
        ioc = request.form.getlist('ioc[]')
        description = request.form.get("description")
        # Insert the submitter's data into the Submitters table
        cur = mySQL.connection.cursor()
        cur.execute("INSERT INTO IOC.Submitter (first_name, last_name, email, telephone) VALUES (%s, %s, %s, %s)", (first_name, last_name, email, telephone))
        mySQL.connection.commit()
        cur.close()
            

        # Get the submitter ID of the last inserted row
        submitter_id = cur.lastrowid
        return render_template("submission.html")
        


@app.route('/scan', methods=['GET', 'POST'])
def scan():
    """
    Perform a scan of the provided domain/IP address using nmap and nmap-vulners script.
    Then, convert the output to HTML and display it to the user.

    Returns:
        HTML page with the scan results.
    """
    if request.method == 'POST':
        # Extract domain/IP from URL
        url = request.form.get('domain')
        domain = url.split('/')[0]
        
        # Run nmap scan and save output to XML file
        cmd = f'sudo nmap -sV --script nmap-vulners --resolve-all {domain} -oX /tmp/{domain}.xml'
        os.system(cmd)
        
        # Convert XML output to HTML
        cmd2 = f'sudo xsltproc /tmp/{domain}.xml -o /tmp/{domain}.html' 
        os.system(cmd2)
        
        # Read HTML file and remove CSS link
        with open(f'/tmp/{domain}.html') as f:
            html_content = f.read()
             # Remove CSS styling from the HTML content
            html_content = re.sub(r'<style.*?>.*?</style>', '', html_content, flags=re.DOTALL)
        # Return results to user
        return render_template('result.html', results=html_content)
    else:
        # Display form to user to input domain/IP address
        return render_template("scan.html")

@app.route('/submission', methods=['GET'])
def submission():
    return render_template("submission.html")


def run_server():
    """
    Runs the Flask application in debug mode.

    Args:
        None

    Returns:
        None
    """
    # Start Flask application in debug mode
    app.run(debug=True)


if __name__ == "__main__":
    live_server.serve(port=5000)
    run_server() 
