## Per-User Preferences and Paths

### Preferences

The Fusion preferences are an ASCII text file that specify settings used globally in Fusion, as well as settings that are used as defaults when creating new compositions. These preferences are stored in a file called *`Fusion.prefs`* within the *`Fusion:\Profiles\Default`* folder. The same folder also contains the file *`Fusion.toolbars`*, containing information about any customizations applied to the toolbars.

This default set of preferences are shared by all artists who use Fusion. There are two reasons why a facility may wish to change the location where the preferences are stored.

- To provide each artist with their own preferences and settings.
- To place all application created files in a user folder, so assist with locking down permissions for the folders where the application is installed.

#### Setting the profile directory

When Fusion starts up, it looks for the environment variable `FUSION_PROFILE_DIR`. This variable defines what directory on the system holds the profiles directory. If this variable is set to a valid path, then the preferences and toolbar configuration files will be stored in the specified directory. If the `FUSION_PROFILE_DIR` does not exist then Fusion will attempt to create it. If the path cannot be created, then the preferences and configuration files are stored in the default location - *`AllData:\Profiles`* in Fusion 6 or *`Fusion:\Profiles`* for earlier versions of Fusion.

A trailing slash is not required in the path.

#### Per-user profiles

Normally all users share the same preferences and toolbar configurations. These default preferences are stored in the `FUSION_PROFILE_DIR\Default` folder. If the `FUSION_PROFILE` environment variable exists and has a alphanumeric value, then Fusion will load preferences from `FUSION_PROFILE_DIR\[value]` instead.

#### Example 1: Home folder preferences

The system administrator wishes to configure Fusion so that each artists preferences are contained within their own home folder - which is mapped as `x:\`. The administrator creates a login script that runs when the artist logs in to thier computer to set the environment variables `FUSION_PROFILE_DIR` to:

```
FUSION_PROFILE_DIR = x:\Application Data\Fusion`
```

When the artist starts Fusion, the preferences and toolbars are loaded from `x:\Application Data\Fusion\Default`.

#### Example 2: Network Preferences

The system administrator is configuring Fusion so that the installation folder for Fusion does not require write access. The preferences will be stored in a central location on network fileserver. Each artists preferences will be seperated into subfolders according to thier username. The administrator creates a login script that creates the following environment variables when the artist logs in to any computer in the domain.

```
FUSION_PROFILE_DIR = \\appserver\fusion\profiles
FUSION_PROFILE = %USERNAME%
```

Note that the administrator is taking advantage of Windows ability to expand the value of an environment variable within another variable by surrounding the variables name with `%` symbols, so that each artists preferences will be stored in their own folder.

### Master Preference Files

Administrators may choose to exert more control over the preferences used by artists. For this purpose, Fusion allows one or more "master" preferences file to be used in addition to the artist's local preferences, to initialize or lock down individual preference settings. This is done with the **`FUSION_MasterPrefs`** environment variable.

`FUSION_MasterPrefs` should contain the full paths to one or more prefs files, separated by semicolons. These prefs files will not be written to by Fusion, and may contain a subset of all available settings. The settings in these files may be changed by the user, and will be used only where local prefs do not already exist, unless the Locked flag is set.

### Locked Preferences

If the line **"`Locked = true,`"** appears in the main table of a master file, all settings in that file are locked and will override any other preferences, and can not be altered by the user. An example file that turns off & locks the "Make this machine a Render Master" setting would look like :

```lua
{
	Global = {
		Network = {
			IsRenderServer = false,
		},
	},
	Locked = true,
}
```

### Additional Plugins Folder

When Fusion starts it will load any plugins (files with the .plugin extension) found in the `Fusion:\Plugins` folder. If the `FUSION_PLUGINS` environment variable is set to a valid path, Fusion will also attempt to load plugins from that folder. This can be used to seperate third party plugins from the main Fusion installation, or to switch between plugin sets for seperate  projects.

It is wise to avoid having the same plugin present in both folders. There is no practical way to predict which version of the plugin will be loaded into memory.

### All Other Paths Used by Fusion

The paths used for loading preferences and plugins must be set by environment variables before Fusion runs. All other configurable paths are stored in the preferences file itself, under the Global \ Paths panel.

These paths can be set using absolute path names, virtual paths relative to the installation of Fusion, or even set via external environment variables, as described in the sections below.

See Appendix H of the Fusion 5 or DFX+ 5 manuals for more information of the various path options presented here.

#### Using the built-in path variables

Fusion:

The variable `Fusion:\` can be used at the start of a path to represent the fully qualified path to the folder containing the Fusion executable. 

For example, if you start a copy of Fusion installed in `C:\Program Files\Fusion`, then the path `Fusion:\Help` refers to `C:\Program Files\Fusion\Help`. If you instead used a copy of Fusion found in `\\post-server\fusion\5.01` then `Fusion:\Help` would expand to `\\post-server\fusion\5.01\HelpTemp:`

The variable `Temp:\` expands to the fully qualified path used by windows for temp files. On Linux this, will be "`/tmp`".

`Comp:` The Comp: variable expands differently depending on whether it is used as a Global path variable, or within an existing composition. If the composition has been saved to disk, then Comp: refers to the fully qualified path to the composition. If the composition is unsaved, or no composition is open, then Comp: expands to the default Composition folder for Fusion, which is usually `Fusion:\Comps`. 

This variable is never used as part of the preferences Global \ Path panel.

User:

(Fusion 5.x only; removed in Fusion 6+)

The `User:` variable expands to the artists home folder. On Windows based systems this is usually `C:\Documents and Settings\username`. On Linux, this will usually expand to the same location as `$HOME` for the current user. 

This was replaced in Fusion 6+ by `UserData:` and `UserDocs:UserData:`(Fusion 6+) `UserData:` refers to the user’s roaming data folder. 

On Windows Vista/7 this is generally the folder "`C:\Users\username\AppData\Roaming\`". 

On Linux, this will be "`$HOME/eyeon/Fusion`". Miscellaneous per-user data is stored here.

UserDocs:

(Fusion 6+)

UserDocs: refers to the user’s document folder. On Windows Vista/7 this is "`C:\Users\username\Documents\`". 

On Linux, this will be "`$HOME/eyeon/Fusion`"

AllData:

(Fusion 6+)

AllData: refers to the system's shared application data folder. 

On Windows Vista/7 this is usually "`C:\ProgramData\eyeon\Fusion\`". 

On Linux, this will be "`/var/opt/eyeon/Fusion`". User profiles are typically stored here, along with Fusion-global files.

AllDocs:

(Fusion 6+)

AllDocs: refers to the system's public/shared document folder. 
On Windows Vista/7 this is usually "`C:\Users\Public\Documents\eyeon\Fusion\`". 

On Linux, this will be "`/var/opt/eyeon/Fusion`". Most project-related files as well as custom system-wide scripts, macros and fuses are stored within subdirectories of `AllDocs:`.

Note: To comply with restrictions imposed when not running with Administrator privileges, “`Profiles:`” is now stored in “`AllData:Profiles\`” and most application data is is multi-pathmapped to refer to “`AllDocs:*subdir*;Fusion:*subdir*`”, etc. 

Fusion no longer saves its application data to `Fusion:`.

#### Expanding Environment Variables

You can use environment variables as part of a pathname. Environment variables are not limited to the start of the path like preset variables are - they can appear anywhere within the path.

You specify an environment variable using the notation `$(xxx)`. For example, `\\post-server\fusion\$(USERNAME)\previews` would replace a portion of the path with the name of the currently logged in user.

