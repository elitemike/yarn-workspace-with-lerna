
working_directory=$(pwd)

echo $working_directory

cd packages/control-set-common-temp
yarn link

cd "$working_directory/packages/control-set-factory-temp"
yarn link
echo "Linking packages to control-set-factory"
yarn link @control-set/common-temp


cd "$working_directory/packages/control-set-ui-temp"
yarn link 
echo "Linking packages to control-set-ui"
yarn link @control-set/factory-temp 
yarn link @control-set/common-temp

echo "Linking packages to control-tester"
cd "$working_directory/applications/control-tester-temp"
yarn link @control-set/factory-temp 
yarn link @control-set/common-temp
yarn link @control-set/ui-temp

#Set-Location $workingDirectory
