# Getting Started
1.	Installation process 
    A. Ensure yarn has been installed
    B. From root of project, call 'yarn bootstrap'.  This will fetch all external packages, create all symlinks and do an initial build of each packagelerna 


# Packages
* control-set-common
* control-set-factory
* control-set-ui

# Applications
* control-tester

# Build
Build all projects 'lerna run build'

Each project can be built independently of each other by calling 'lerna run bulid-{project-name}' example: 'lerna run build-control-set-common'

# Test
Test all projects 'lerna run test'

Each project can be tested independently of each other by calling 'lerna run test-{project-name}' example: 'lerna run test-control-set-common'
