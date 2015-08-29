#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Author: Yuki Furuta <furushchev@jsk.imi.i.u-tokyo.ac.jp>

import fileinput
from optparse import OptionParser

def main():
    pass

if __name__ == '__main__':
    parser = OptionParser(usage="%prog [options]")
    parser.add_option('-r', "--no-mail", dest="no_mail",
                      help="skip sending error mail", action="store_true", default=False)
    parser.add_option('-d', "--db", dest="db_name", metavar="DB",
                      help="connect to mongodb DB", default="trial_app")
