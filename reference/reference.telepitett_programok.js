const installed_programs_packages_libraries = {
    linux: {
        robo3t: {
            name: "robo3t",
            description: "",
            website: "https://robomongo.org/",
            install_command: [
                "sudo apt update", 
                "sudo apt install snapd",
                "sudo snap install robo3t-snap"],
            bash_script: "",
            windows_dll: ""
        },
        xclip: {
            name: "xclip",
            description: "",
            webiste: "",
            install_command: [
                "sudo apt-get install xclip"
            ]
        },
        synaptic: {
            name: "synaptic package manager",
            description: "Synaptic is a lightweight GUI front end to apt package management system used in Debian, Ubuntu, Linux Mint and many other Debian/Ubuntu based distributions. Basically, everything that you can do using the apt-get commands in the terminal can be achieved with Synaptic.",
            website: "",
            install_command: [{
                1: "sudo apt-get update",
                2: "sudo apt-get install synaptic"
            }]
        },
        blender: "blender",
        intellj: "intellj",
        emacs: "emacs",
        spacemacs: "spacemacs",
        vim: "vim",
        codeblocks: "codeblocks",
        eclipse: "eclipse",
        vs_code: "vs_code",
        chromium: {
            name: "chromium browser",
            description: "",
            website: "",
            install_command: ["sudo apt install -y chromium-browser"]
        },
        libre_office: "libre office",
        android_studio: "android studio",
        team_viewer: "team viewer",
        atom: {
            name: "Atom",
            install: "sudo snap install atom --classic",
            uninstall: "sudo snap remove atom"
        },
        netbeans: "netbeans",
        jvm: "jvm",
        clojure: {
            name: "clojure",
            install: [{
                1: "curl -O https://download.clojure.org/install/linux-install-1.10.1.561.sh",
                2: "chmod +x linux-install-1.10.1.561.sh",
                3: "sudo ./linux-install-1.10.1.561.sh",
            }],
            uninstall: "sudo apt-get purge --auto-remove clojure "
        },
        julia: "julia",
        racket: {
            name: "racket",
            install: [{
                1: "sudo add-apt-repository ppa:plt/racket",
                2: "sudo apt-get update",
                3: "sudo apt-get install racket"
            }]
        },
        npm: "npm",
	    leiningen: {
            name: "leiningen",
            description: "",
            website: "",
            install_command: {
                1: "sudo apt-get update -y",
                2: "sudo apt-get install -y leiningen"
            }
    },
	boot: "boot",
    nodejs: "nodejs",
    ripgrep: {
        name:" ripgrep",
        description: "",
        website: "",
        install_command: "sudo snap install ripgrep --classic"
    },
    locate: {
        name:" locate",
        description: "",
        website: "",
        install_command: "sudo apt install locate"
    },
	docker: {
        name: "docker",
        description: "",
        website: "",
		install_command: [
			"sudo apt-get update", 
			"sudo apt-get remove docker docker-engine docker.io",
			"sudo apt install docker.io"]
	},
	yarn: "yarn",
        pip: "pip",
        discord: "discord",
        slack: "slack",
        infran_view: "infran view",
        vlc: "vlc",
        postman: "postman",
        geogebra: "geogebra",
        git: "git",
        haskell: "haskell",

        redshift: {
            name: "redshift",
            download: "https://github.com/jonls/redshift/releases",
                // latest for ubuntu on 2020.07.18. is "redshift-1.12.tar.gz"
                // needed for later configurations
            dependencies: {
                intltool :{
                    install: "sudo apt install intltool",
                    },
                randr: {
                    install: {
                        1: "cd in terminal to the downloaded and extracted folder of redshift",
                        2: "./configure --enable-randr --enable-gui --enable-ubuntu --with-systemduserunitdir=$HOME/.config/systemd/user",
                        3: "make",
                        4: "sudo make install",
                            },
                    },
            install: "sudo apt-get install redshift",
            configure_light_temperaure: {
                1: "locate longitude and latitude manually or via geoclude https://location.services.mozilla.com/v1/geolocate?key=geoclue",
                    // Budapest's is lat=47.49791 lon=19.04023
                2: "edit the xredshift.conf.sample file in the main directory of redshift: search for the line lat= then change your coordinates, and remove from the file's name the .sample"
            },
            configure_brightness: {
                1: "mkdir -p ~/.config/redshift/hooks",
                2: "touch ~/.config/redshift/hooks/brightness.sh",
                3: "xdg-open ~/.config/redshift/hooks/brightness.sh",
                4: "https://drive.google.com/file/d/1iee8lptIsMIoKCPwnWvEskRKUdUvd9bM/view?usp=sharing",
                    // paste and adjust this script to brightness.sh
                5: "chmod +x ~/.config/redshift/hooks/brightness.sh",
                    // making it executable
                6: "turn on autostart"
            },
        }
        }
    },
    windows:{
        chrome: {
            name: "Google Chrome",
            download: "https://www.google.com/intl/hu_hu/chrome/"
        },
        total_commander: {
            name: "Total Commander",
            download: "https://www.totalcommander.hu/letoltes"
        },
        teamviewer: {
            name: "TeamViewer",
            download: "https://www.teamviewer.com/hu/?gclid=EAIaIQobChMI6fH53-275gIVy-R3Ch3qPA5pEAAYASAAEgI3xvD_BwE"
        },
        vscode: {
            name: "Visual Studio Code",
            download: "https://code.visualstudio.com/"
        },
        mindmanager: {
            name: "Mindjet MindManager 2016 16.0.152",
            download: "https://thepiratebay.org/description.php?id=12609825"
        },
        esetnod32: {
            name: "Eset Nod32",
            download: "https://www.eset.com/hu/otthoni/antivirus/letoltes/",
            // need to be renewed monthly but it's always updated
            license_keys: "https://nod32-trial-keys.site/",
        },
        utorrent: {
            name: "μTorrent",
            download: "https://www.utorrent.com/downloads/win"
        },
        discord: {
            name: "Discord",
            download: "https://discordapp.com/download"
        },
        winrar: {
            name: "WinRar",
            download: "https://drive.google.com/open?id=13qb7J4nQ1Lmkipx0MIjSeuIAxcWRsP1L"
        },
        skype: {
            name: "Skype",
            download: "https://www.skype.com/hu/get-skype/"
        },
        photoshop: {
            name: "Adobe Photoshop CC 2015 Portable",
            description: "best designing tool so far",
            download: "https://drive.google.com/open?id=1v6vkjxCT0S3yFpeoE6ftem0MMJ5aZbZY"
        },
        after_effects: {
            name: "Adobe After Effects 2019",
            description: "for making visual effects and animated graphics",
            download: "https://mega.nz/#F!EFo1RagA!LVZRSHfTq-0cD9x-lK-PRg"
        },
        illustrator: {
            name: "Adobe Illustrator CC 2019",
            description: "vectorgraphical editor",
            download: "https://drive.google.com/open?id=16aFr2QFrboe6_Kfon8dXRdG89oJgIS4t"
        },
        vegas_pro: {
            name: "Magix Vegas Pro",
            description: "professional multimedia editor",
            download: "https://mega.nz/#!JUIFkaCC!4zrcFojzysHKKlRDMczHjo5723IASTr1aZ9cii32Xdw"
        },
        flstudio: {
            name: "FL Studio",
            description: "digital audio and dj workstation",
            download: "https://mega.nz/#F!pcJV2QZZ!pwf694UTaQ2j3U1oP5xsFw"
        },
        thunderbird: {
            name: "Thunderbird",
            description: "my favorite mail client",
            download: "https://www.thunderbird.net/en-GB/"
        },
        movavi: {
            name: "Movavi Video Converter 19 Premium",
            description: "movie extension converter",
            download: "https://drive.google.com/open?id=1wMB1xnDRcV3Vtu25MfxrN1ST5iurU8HX"
        }
    }
}

export default installed_programs_packages_libraries;