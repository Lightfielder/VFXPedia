# Shared Bins

The Bins are not actually a part of the main Fusion executable. They run as a separate program that appears in the tasklist as eyeonServer.exe. This is launched automatically each time Fusion is started.

As noted in the Bins As A Server section of the manual, this is because bins are actually a server that can be queried remotely, allowing anyone that is operating Fusion to connect to bins on another copy of Fusion. The sections below describe how to connect to bins on another system, and how to run a standalone bins server that can be used by all copies of Fusion in a facility.

### Connecting To Bins On Another Fusion Workstation

To connect to a remote system and display its bins, open the preferences and locate the Global>Bins>Servers panel in the list.

This panel shows a list of the systems, with buttons below to allow new entries to be added to or deleted from the list.

#### Adding An Entry To The Bin Server List

Click the Add button to add an entry to the list. The text controls below the button will become enabled for editing. Enter the system name or IP address of the system hosting the Bins to be connected.

Fusion does not attempt to test or connect to the system until the Bins dialog is opened. If it cannot connect, the system will still be listed, with access denied or unavailable marked next to the name of the system in the tree.

There is no practical limit to the number of bins that can be accessed.

#### Accessing Remote Bins

Remote Bins show in the Bins list as another top level item in the tree on the left side. The system is shown by name. If the system is unavailable, or requires a password, the label will also read unavailable or access denied

Open and navigate remote bins just like local bins.

### Running A Bins Server

A standalone Bins Server that does not require a copy of Fusion to be running can be created. This is done by running eyeonServer.exe [option] from the command line.

#### Files Required To Run A Bin Server

It is strongly recommended to run a standalone bins server from a fresh directory. Copy the following files from the Fusion installation to the new directory.

eyeonServer.exe
eyeonScript.exe
eyeonScript.dll
iup2.5.dll
lua5.1.dll

#### eyeonServer Command Line Options

Run eyeonServer with the Command Line Options to see the following list.

```bash
Usage: eyeonServer [options]
-i --install Install as Service
-u --uninstall Uninstall Service
-s --serve Serve a while,
-S --serveforever Serve Forever!
-i --install: Installs eyeonServer.exe as a service. See below.
-u -- uninstall: Remove previously installed service
-s --serve: This option is used to start the eyeonServer when Fusion starts up. eyeonServer will then watch for Fusion.exe in the process list and exit when its no longer available. This is not an appropriate option for a user controlled startup.
-S --serveforever: This option is used to start the eyeonServer manually. eyeonServer will initialize then detach itself from the command prompt. The only way to stop a eyeonServer started this way is to end the eyeonServer.exe process manually from the task manager.
```

#### Installing The Bins Server As A Service

To install the Bins Server as a service, open a command prompt and browse to the folder where eyeonServer is installed. Run eyeonServer.exe with the -i command line option, as pictured below.

A service called eyeonServer will be added to the list of services, set to start automatically when the computer is booted. The service will not be started when it is first installed so restart.

Start a service by using the administrative tools/services control panel, or by typing `net start eyeonserver' from the command prompt, as pictured below.

### Permissions

A remote users access to the Bin can be restricted, requiring a login to view the contents, make changes or create folders.

Details on creating users and setting permissions were not available when this manual was sent to the printer. Please consult online documentation or check the support section of www.eyeonline.com for details.

### Using Multiple Libraries

*These instructions require Fusion 5.1 or later.*

A default Bin Server provides a single library for the Bins, named 'default'. It is possible to run several seperate libraries from the same eyeonServer installation. This is usually a better use of resources that running a seperate eyeonServer for each project.

For example, a studio working on two shows at the same time could have seperate libraries for each, named Show_A and ShowB. Currently creating a new library must be done via scripting.

This can be done from the command line or from the console in a running copy of Fusion, using the following syntax :

```lua
 es = eyeonServer("<servername>", <timeout in seconds>)
 es:CreateLibrary("<libraryname>")
```

For example, to create two libraries called ShowA and ShowB on a Bin server located on Server_01

```lua
 es = eyeonServer("Server_01", 10)
 es:CreateLibrary("ShowA")
 es:CreateLibrary("ShowB")
```
