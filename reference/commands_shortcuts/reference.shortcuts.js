exports.shortcuts = 
{
    linux: {
        shortcuts: {
        "Ctrl + Shift + Alt + down/up arrow keys": "changing between workspaces with moving the actual window to it",
        },
        terminal_commands: {
        "touch": "making a new file",
        "xdg-open": "opens a file from terminal",
        "ps -A | grep <programsname>": "lists the process id of the running program",
        "sudo kill -9 <Process ID>": "stops the specified running program",
        "xkill": "this program is very dangerous, but is useful for aborting programs that have displayed undesired windows on a user's screen",
        "sudo nautilus": "opens file manager in root mode"
    },
    windows: {
        rename:         `F2`,
        delete:         `del`,
    },
    vscode: {
        toggle_terminal: `CTRL+j`,
        open_file: `CTRL+O`,
        node_fileNamedotjs: `run a js file through the terminal`
    },
    emacs: {
        CTRL_x_b: "select or create a buffer named buffer (switch-to-buffer)",
        CTRL_x_4_b: "Similar, but select buffer in another window (switch-to-buffer-other-window)",
        CTRL_x_5_b: "Similar, but select buffer in a separate frame (switch-to-buffer-other-frame)"
},
    spacemacs: {
        basic: {
        SPC_t_E_h_or_ALT_m_t_E_h: "enable/disable hybrid mode (vim and emacs editing style)",
        M_x_term: "open a terminal",
        C_z: "switch between emacs/vim editing style in hybrid mode",
        C_x_q: "toggle read-only mode 'on' or 'off'",
        },
        files: {
        C_x_f: "read a file into emacs",
        C_x_C_s: "save a file back to disk",
        C_x_s: "save all files",
        C_x_i: "insert contents of another file into its contents",
        C_x_C_v: "replace this file with the file you really want",
        C_x_C_w: "write buffer to a specified file",
        C_x_C_q: "toggle read-only status of buffer",
        },
        // following codes are working in vim mode:
        SPC_ff: "search files for editing",
        SPC_T_m: "enable menu bar",
        SPC_g_h: "opens the GitHub menu",
        SPC_g_h_c: "cloning remote GitHub repos",
        SPC_T_n: "switch between dark-light theme",
    },
    chrome: {
        downloads:      `ctrl+j`
    },
    terminal: {
        list_directory: `ls`,
        make_directory: `mkdir`,
        remove_dir:     `rmdir`,
        new_file:       `touch`,
        clear_screen:  [`clear`,`CTRL+L`]
    },
    GIT: {
        lists_branches_on_the_repository:    `git branch -a`,
        switch_to_specified_branch:          `git checkout <branchname>`,
        // after `git merge` add the name of the branch that we wanna merge in the actual branch:
        merge_and_fetch_a_branch:            `git merge <branchname>`,
        creates_a_branch:                    `git checkout -b <branchname>`,
        mark_each_conflicted_file_as_solved: `git add <filepath/filename.extension>`,
        initializing_local_repository:             `git init reponame`,
        clone_repository:                    `git clone <url>`,
        list_files_and_directories:          `ls`,
        make_a_new_file:                     `touch filename.extension`,
        creating_a_remote:                   `git remote add origin  <REMOTE_URL>`,
        summary_of_changes:                  `git status`,
        add_a_content_to_staging_area:       `git add filename.extension`,
        add_every_content_to_staging_area:   [`git add "xxx" `, [`git add .`, `git add -A`]],
        undo_add_for_all_files:              `git reset`,
        commenting_changes:                  `git commit -m "specifying changes here"`,
        upload_changes:                      `git push origin master`,
        logger:                              `git log`,
        unmerged_path_conflict_solution:     `https://www.git-tower.com/learn/git/faq/solve-merge-conflicts`,
    }
    },
    postman: {
    },
    microsoft_excel: {
        save: `CTRL+S`,
        open_file: `CTRL+O`
    },
    word:{},
    total_commander:{},
    mindmanager:{},
    github:{},
    mozilla:{},
    firefox:{},
}