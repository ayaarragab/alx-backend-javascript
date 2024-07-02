#!/bin/bash

# Discussion, issues and change requests at:
#   https://github.com/nodesource/distributions
#
# Script to install the NodeSource Node.js 12.x repo onto a
# Debian or Ubuntu system.
#
# Run as root or insert `sudo -E` before `bash`:
#
# curl -sL https://deb.nodesource.com/setup_12.x | bash -
#   or
# wget -qO- https://deb.nodesource.com/setup_12.x | bash -
#
# CONTRIBUTIONS TO THIS SCRIPT
#
# This script is built from a template in
# https://github.com/nodesource/distributions/tree/master/deb/src
# please don't submit pull requests against the built scripts.
#


export DEBIAN_FRONTEND=noninteractive
SCRSUFFIX="_12.x"
NODENAME="Node.js 12.x"
NODEREPO="node_12.x"
NODEPKG="nodejs"

print_status() {
    echo
    echo "## $1"
    echo
}

if test -t 1; then # if terminal
    ncolors=$(which tput > /dev/null && tput colors) # supports color
    if test -n "$ncolors" && test $ncolors -ge 8; then
        termcols=$(tput cols)
        bold="$(tput bold)"
        underline="$(tput smul)"
        standout="$(tput smso)"
        normal="$(tput sgr0)"
        black="$(tput setaf 0)"
        red="$(tput setaf 1)"
        green="$(tput setaf 2)"
        yellow="$(tput setaf 3)"
        blue="$(tput setaf 4)"
        magenta="$(tput setaf 5)"
        cyan="$(tput setaf 6)"
        white="$(tput setaf 7)"
    fi
fi

print_bold() {
    title="$1"
    text="$2"

    echo
    echo "${red}================================================================================${normal}"
    echo "${red}================================================================================${normal}"
    echo
    echo -e "  ${bold}${yellow}${title}${normal}"
    echo
    echo -en "  ${text}"
    echo
    echo "${red}================================================================================${normal}"
    echo "${red}================================================================================${normal}"
}

bail() {
    echo 'Error executing command, exiting'
    exit 1
}

exec_cmd_nobail() {
    echo "+ $1"
    bash -c "$1"
}

exec_cmd() {
    exec_cmd_nobail "$1" || bail
}

node_deprecation_warning() {
    if [[ "X${NODENAME}" == "Xio.js 1.x" ||
          "X${NODENAME}" == "Xio.js 2.x" ||
          "X${NODENAME}" == "Xio.js 3.x" ||
          "X${NODENAME}" == "XNode.js 0.10" ||
          "X${NODENAME}" == "XNode.js 0.12" ||
          "X${NODENAME}" == "XNode.js 4.x LTS Argon" ||
          "X${NODENAME}" == "XNode.js 5.x" ||
          "X${NODENAME}" == "XNode.js 6.x LTS Boron" ||
          "X${NODENAME}" == "XNode.js 7.x" ||
          "X${NODENAME}" == "XNode.js 8.x LTS Carbon" ||
          "X${NODENAME}" == "XNode.js 9.x" ||
          "X${NODENAME}" == "XNode.js 10.x" ||
          "X${NODENAME}" == "XNode.js 11.x" || 
          "X${NODENAME}" == "XNode.js 12.x" ||
          "X${NODENAME}" == "XNode.js 13.x" ||
          "X${NODENAME}" == "XNode.js 14.x" ||
          "X${NODENAME}" == "XNode.js 15.x" ||
          "X${NODENAME}" == "XNode.js 17.x" ]]; then

        print_bold \
"                            DEPRECATION WARNING                            " "\
${bold}${NODENAME} is no longer actively supported!${normal}

  ${bold}You will not receive security or critical stability updates${normal} for this version.

  You should migrate to a supported version of Node.js as soon as possible.
  Use the installation script that corresponds to the version of Node.js you
  wish to install. e.g.

   * ${green}https://deb.nodesource.com/setup_16.x — Node.js 16 \"Gallium\"${normal}
   * ${green}https://deb.nodesource.com/setup_18.x — Node.js 18 LTS \"Hydrogen\"${normal} (recommended)
   * ${green}https://deb.nodesource.com/setup_19.x — Node.js 19 \"Nineteen\"${normal}
   * ${green}https://deb.nodesource.com/setup_20.x — Node.js 20 \"Iron\"${normal} (current)

  Please see ${bold}https://github.com/nodejs/Release${normal} for details about which
  version may be appropriate for you.

  The ${bold}NodeSource${normal} Node.js distributions repository contains
  information both about supported versions of Node.js and supported Linux
  distributions. To learn more about usage, see the repository:
    ${bold}https://github.com/nodesource/distributions${normal}
"
        echo
        echo "Continuing in 20 seconds ..."
        echo
        sleep 20
    fi
}

script_deprecation_warning() {
    if [ "X${SCRSUFFIX}" == "X" ]; then
        print_bold \
"                         SCRIPT DEPRECATION WARNING                         " "\
This script, located at ${bold}https://deb.nodesource.com/setup${normal}, used to
  install Node.js 0.10, is deprecated and will eventually be made inactive.

  You should use the script that corresponds to the version of Node.js you
  wish to install. e.g.

   * ${green}https://deb.nodesource.com/setup_16.x — Node.js 16 \"Gallium\"${normal}
   * ${green}https://deb.nodesource.com/setup_18.x — Node.js 18 LTS \"Hydrogen\"${normal} (recommended)
   * ${green}https://deb.nodesource.com/setup_19.x — Node.js 19 \"Nineteen\"${normal}
   * ${green}https://deb.nodesource.com/setup_20.x — Node.js 20 \"Iron\"${normal} (current)

  Please see ${bold}https://github.com/nodejs/Release${normal} for details about which
  version may be appropriate for you.

  The ${bold}NodeSource${normal} Node.js Linux distributions GitHub repository contains
  information about which versions of Node.js and which Linux distributions
  are supported and how to use the install scripts.
    ${bold}https://github.com/nodesource/distributions${normal}
"

        echo
        echo "Continuing in 20 seconds (press Ctrl-C to abort) ..."
        echo
        sleep 20
    fi
}

print_bold_deprecation() {
    title="$1"
    text="$2"

    echo
    echo "${bold}${red}================================================================================${normal}"
    echo "${bold}${red}▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓${normal}"
    echo "${bold}${red}================================================================================${normal}"
    echo
    echo -e "  ${bold}${yellow}${title}${normal}"
    echo
    echo -en "  ${text}"
    echo
    echo "${bold}${red}================================================================================${normal}"
    echo "${bold}${red}▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓${normal}"
    echo "${bold}${red}================================================================================${normal}"
}


repo_deprecation_warning() {
  print_bold_deprecation \
"                         ${underline}SCRIPT DEPRECATION WARNING${normal}                    " "\

  This script, located at ${bold}https://deb.nodesource.com/setup_X${normal}, used to
  install Node.js is deprecated now and will eventually be made inactive.

  Please visit the NodeSource ${bold}distributions${normal} Github and follow the
  instructions to migrate your repo.
  ${underline}${green}${bold}https://github.com/nodesource/distributions${normal}

  The ${bold}NodeSource${normal} Node.js Linux distributions GitHub repository contains
  information about which versions of Node.js and which Linux distributions
  are supported and how to install it.
  ${underline}${green}${bold}https://github.com/nodesource/distributions${normal}


                          ${underline}${bold}${yellow}SCRIPT DEPRECATION WARNING${normal}
"

        echo
        echo "${cyan}${bold}TO AVOID THIS WAIT MIGRATE THE SCRIPT${normal}"
        echo "Continuing in 60 seconds (press Ctrl-C to abort) ..."
        echo
        sleep 60
}

setup() {

script_deprecation_warning
node_deprecation_warning
repo_deprecation_warning

print_status "Installing the NodeSource ${NODENAME} repo..."

if $(uname -m | grep -Eq ^armv6); then
    print_status "You appear to be running on ARMv6 hardware. Unfortunately this is not cu