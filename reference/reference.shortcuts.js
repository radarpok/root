exports.shortcuts = 
{
    linux: {
        terminal_commands: {
        making_a_new_file:                                 "touch",
        opens_a_file_from_terminal:                        "xdg-open",
        lists_the_process_id_of_the_running_program:       "ps -A | grep <programsname>",
        stops_the_specified_running_program:               "sudo kill -9 <Process ID>",
        // is useful for aborting programs that have displayed undesired windows on a user's screen
        this_program_is_very_dangerous:                    "xkill",
        opens_file_manager_in_root_mode:                   "sudo nautilus",
        list_directory:                                    "ls",
        make_directory:                                    "mkdir",
        remove_dir:                                        "rmdir",
        new_file:                                          "touch",
        clear_screen:                                      ["clear","CTRL+L"],
    },
        // with moving the actual window to the workspace
        changing_between_workspaces:                       "Ctrl + Shift + Alt + down/up arrow keys",
    },
    windows: {
        rename:                                            "F2",
        delete:                                            "Del",
        new_workflow:                                      "Win + Ctrl + D",
        switch_between_workflows:                          "Win + Crtl + <-- -->",
        minimizing_all_opened_tabs:                        "Win + M",
        open_an_app_from_the_taskbar:                      "Win + 1-9",
        split_screen_between_2_apps:                       "Win + <-- ; Win + -->",
        // no need to hold the keys
        switch_between_apps:                               "Win + Tab",
        open_task_manager:                                 "Ctrl + Shift + Esc"
    },
    vscode: {
        toggle_terminal:                                   "CTRL+j",
        open_file:                                         "CTRL+O",
        node_fileNamedotjs:                                "run a js file through the terminal"
    },
    emacs: {
        // + means you can release the keys
        // switch-to-buffer
        select_or_create_a_buffer_named_buffer:            "CTRL x + b",
        // switch-to-buffer-other-window
        select_buffer_in_another_window:                   "CTRL x + 4 b",
        // switch-to-buffer-other-frame
        select_buffer_in_a_separate_frame:                 "CTRL x + 5 b"
    },
    spacemacs: {
        basic: {
        toggle_read_only_mode: "Ctrl x q",
        // vim and emacs editing style
        enable_or_disable_hybrid_mode:                     "SPC + t E h or ALT m + t E h",
        emacs_or_vim_editing_style_in_hybrid_mode:         "Ctrl z",
        },
        files: {
        read_a_file_into_emacs:                            "Ctrl x f",
        save_a_file_back_to_disk:                          "Ctrl x + Ctrl s",
        save_all_files:                                    "Ctrl x s",
        insert_contents_of_another_file_into_its_contents: "Ctrl x i",
        replace_this_file_with_the_file_you_really_want:   "Ctrl x + Ctrl v",
        write_buffer_to_a_specified_file:                  "Ctrl x + Ctrl w",
        toggle_read_only_status_of_buffer:                 "Ctrl x + Ctrl q",
        },
        // following codes are working in vim mode:
        search_files_for_editing:                          "SPC + f f",
        enable_menu_bar:                                   "SPC + T m",
        opens_the_GitHub_menu:                             "SPC + g h",
        cloning_remote_GitHub_repos:                       "SPC + g h c",
        switch_between_dark_light_theme:                   "SPC + T n",
    },
    chrome: {
        downloads:                                         "Ctrl j"
    },
    GIT: {
        clone_repository:                                  "git clone <url>",
        list_files_and_directories:                        "ls",
        make_a_new_file:                                   "touch filename.extension",
        create_a_remote:                                   "git remote add origin  <REMOTE_URL>",
        initialize_local_repository:                       "git init reponame",
        show_summary_of_changes:                           "git status",
        add_a_content_to_staging_area:                     "git add filename.extension",
        add_every_content_to_staging_area:                 [`git add "xxx" `, [`git add .`, `git add -A`]],
        undo_add_for_all_files:                            "git reset",
        comment_changes:                                   `git commit -m "write a comment here"`,
        upload_changes:                                    "git push origin master",
        logger:                                            "git log",
        list_branches_on_the_repository:                   "git branch -a",
        switch_to_specified_branch:                        "git checkout <branchname>",
        // after `git merge` add the name of the branch that we wanna merge in the actual branch:
        merge_and_fetch_a_branch:                          "git merge <branchname>",
        create_a_branch:                                   "git checkout -b <branchname>",
        mark_each_conflicted_file_as_solved:               "git add <filepath/filename.extension>",
        // technically not a command but very useful if you have problems with uploading
        unmerged_path_conflict_solution:                   "https://www.git-tower.com/learn/git/faq/solve-merge-conflicts",
    },
    postman: {
    },
    microsoft_excel: {
        save:                                              "CTRL+S",
        open_file:                                         "CTRL+O"
    },
    word:{},
    total_commander:{},
    mindmanager:{},
    github:{},
    mozilla:{},
    firefox:{},
}