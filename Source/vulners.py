import os
file = open('vul.txt', "r")
line = file.readline()
while line:
	line1=line.split(" ")
	
	if len(line1) == 1 :
		str1="mkdir "+line1[0]
		print(line1[0])	
		os.system(str1)
		os.system("sudo chmod 777 "+line1[0])
		
	if len(line1) == 2 :
		
		#print(line1[0])
		#print(line1[1])
		cmd="sudo nmap -sV --script nmap-vulners/ "+line1[1].replace("\n", "" )+" --resolve-all -oX "+line1[0]+"/"+line1[1].replace("\n", "")+".xml && xsltproc "+line1[0]+"/"+line1[1].replace("\n", "" )+".xml -o "+line1[0]+"/"+line1[1].replace("\n", "" )+".html"
		print(cmd)
		os.system(cmd)
		cmd2="sudo chmod 777 "+line1[0]+"/"+line1[1].replace("\n", "" )+".html"
		os.system(cmd2)
		os.system("cd ..")
	line = file.readline()
file.close()	
	
	
	


