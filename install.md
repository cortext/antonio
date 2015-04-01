Install
==

* VirtualBox
* Vagrant
* Install Cortext-box (Debian Jessie)
* Install Mongo DB
sudo apt-get install mongodb
>> Error:
```Wed Apr  1 17:43:54.890 Error: couldn't connect to server 127.0.0.1:27017 at src/mongo/shell/mongo.js:145
exception: connect failed```

```sudo rm /var/lib/mongodb/mongod.lock```
```sudo service mongodb restart```

* Activate port 27017 ? in Vagrant?

Python modules
See requirements.pip
