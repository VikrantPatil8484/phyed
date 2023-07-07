import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Introduc from './pages/cPlusContent/Introduc';
import InstallVsCode from './pages/cPlusContent/InstallVsCode';
import BasicStruc from './pages/cPlusContent/BasicStruc';
import VariableScopeData from './pages/cPlusContent/VariableScopeData';
import VariablesComm from './pages/cPlusContent/VariablesComm';
import BasicIO from './pages/cPlusContent/BasicIO';
import HeaderFiles from './pages/cPlusContent/HeaderFiles';
import CplusVar from './pages/cPlusContent/CplusVar';
import ConstantsandManipulators from './pages/cPlusContent/ConstantsandManipulators';
import CplusIfElseStatement from './pages/cPlusContent/CplusIfElseStatement';
import CplusForWhileLoop from './pages/cPlusContent/CplusForWhileLoop';
import CplusBreakContinue from './pages/cPlusContent/CplusBreakContinue';
import CplusFunction from './pages/cPlusContent/CplusFunction';
import CplusFunctionParams from './pages/cPlusContent/CplusFunctionParams';
import CplusFunctionReturn from './pages/cPlusContent/CplusFunctionReturn';
import CplusFunctionScopeLifetime from './pages/cPlusContent/CplusFunctionScopeLifetime';
import CplusInlineFunction from './pages/cPlusContent/CplusInlineFunction';
import CplusFunctionError from './pages/cPlusContent/CplusFunctionError';
import CplusFunctionLib from './pages/cPlusContent/CplusFunctionLib';
import CplusMultidimensionalArray from './pages/cPlusContent/CplusMultidimensionalArray';
import PassingArray from './pages/cPlusContent/PassingArray';
import DynamicArray from './pages/cPlusContent/DynamicArray';
import ArrayPointer from './pages/cPlusContent/ArrayPointer';
import ArrayLibraries from './pages/cPlusContent/ArrayLibraries';
import CplusStrings from './pages/cPlusContent/CplusStrings';
import CplusStringOperations from './pages/cPlusContent/CplusStringOperations';
import CplusStringManipulation from './pages/cPlusContent/CplusStringManipulation';
import CplusStringConversion from './pages/cPlusContent/CplusStringConversion';
import CplusStringParsing from './pages/cPlusContent/CplusStringParsing';
import AdvancedStringsTop from './pages/cPlusContent/AdvancedStringsTop';
import StructureIntro from './pages/cPlusContent/StructureIntro';
import StructuresArray from './pages/cPlusContent/StructuresArray';
import StructurePointers from './pages/cPlusContent/StructurePointers';
import StructureManipulation from './pages/cPlusContent/StructureManipulation';
import Bitfileds from './pages/cPlusContent/Bitfileds';
import Unions from './pages/cPlusContent/Unions';
import StructureFileIO from './pages/cPlusContent/StructureFileIO';
import PointerIntro from './pages/cPlusContent/PointerIntro';
import PonterOperations from './pages/cPlusContent/PonterOperations';
import PointerandArray from './pages/cPlusContent/PointerandArray';
import PointerandStructures from './pages/cPlusContent/PointerandStructures';
import PointerstoPointer from './pages/cPlusContent/PointerstoPointer';
import PointerandString from './pages/cPlusContent/PointerandString';
import PointerandConst from './pages/cPlusContent/PointerandConst';
import PointersandOOp from './pages/cPlusContent/PointersandOOp';
import PointersandException from './pages/cPlusContent/PointersandException';
import PointerAdvanced from './pages/cPlusContent/PointerAdvanced';
import CppObjects from './pages/cPlusContent/CppObjects';
import CppClasses from './pages/cPlusContent/CppClasses';
import CppMemberFunc from './pages/cPlusContent/CppMemberFunc';
import CppDataMembers from './pages/cPlusContent/CppDataMembers';
import CppEncapsulation from './pages/cPlusContent/CppEncapsulation';
import CppAccesSpeci from './pages/cPlusContent/CppAccesSpeci';
import CppConstructors from './pages/cPlusContent/CppConstructors';
import CppDestructors from './pages/cPlusContent/CppDestructors';
import CppInheritance from './pages/cPlusContent/CppInheritance';
import CppPolymorphism from './pages/cPlusContent/CppPolymorphism';
import CppOperatorOverl from './pages/cPlusContent/CppOperatorOverl';
import CppOverloading from './pages/cPlusContent/CppOverloading';
import CppStaticMem from './pages/cPlusContent/CppStaticMem';
import CppFriendsFunctions from './pages/cPlusContent/CppFriendsFunctions';
import CppTemplates from './pages/cPlusContent/CppTemplates';
import CplusArray from './pages/cPlusContent/CplusArray';
import CoursesPage from './pages/CplusCoursesPage';
import Header from './components/Header';
import PythonCoursePage from './pages/PythonCoursePage';
import IntroPython from './pages/pythonContent/IntroPython';
import PythonGettingStarted from './pages/pythonContent/PythonGettingStarted';
import PhythonSyntax from './pages/pythonContent/PythonSyntax.jsx';
import PhythonComments from './pages/pythonContent/PythonComments';
import PhythonVariables from './pages/pythonContent/PythonVariables';
import PhythonDataTypes from './pages/pythonContent/PythonDataTypes';
import PhythonNumbers from './pages/pythonContent/PythonNumbers';
import PythonDictionaries from './pages/pythonContent/PythonDictionaries.jsx';
import PythonCasting from './pages/pythonContent/PythonCasting';
import PythonStrings from './pages/pythonContent/PythonStrings';
import PythonBooleans from './pages/pythonContent/PythonBooleans';
import PythonOperators from './pages/pythonContent/PythonOperators';
import PythonLists from './pages/pythonContent/PythonLists';
import PythonTurples from './pages/pythonContent/PythonTurples';
import PythonSets from './pages/pythonContent/PythonSets';
import PythonIFElse from './pages/pythonContent/PythonIFElse';
import PythonWhileLoops from './pages/pythonContent/PythonWhileLoops';
import PythonRecursion from './pages/pythonContent/PythonRecursion';
import PythonLambda from './pages/pythonContent/PythonLamba';
import PythonArrays from './pages/pythonContent/PythonArray';
import PythonMath from './pages/pythonContent/PythonMath';
import PythonPipPackage from './pages/pythonContent/PythonPipPackage';
import PythonClassesObjects from './pages/pythonContent/PythonClassesObject';
import PythonTryExcept from './pages/pythonContent/PythonTryExcept';
import PythonFileHandling from './pages/pythonContent/PythonFileHandling';
import PythonScope from './pages/pythonContent/PythonScope';
import PythonUserInput from './pages/pythonContent/PythonUserInput';
import PythonIterators from './pages/pythonContent/PythonIterators';
import PythonStringFormatting from './pages/pythonContent/PythonStringFormatting';
import PythonModules from './pages/pythonContent/PythonModules';
import PythonDateTime from './pages/pythonContent/PythonDateTime';
import PythonForLoops from './pages/pythonContent/PythonForLoops';
import PythonFunctions from './pages/pythonContent/PythonFunctions';
import StringFormatManip from './pages/cPlusContent/StringFormatManip';
import DynamicMemoryAll from './pages/cPlusContent/DynamicMemoryAll'
import PointerandFunctions from './pages/cPlusContent/PointerandFunctions';
import AlgorithmPage from './pages/AlgorithmPage';
import SortingIntro from './pages/algorithmContent/SortingIntro';
import BubbleSort from './pages/algorithmContent/BubbleSort';
import InsertionSort from './pages/algorithmContent/InsertionSort';
import MergeSort from './pages/algorithmContent/MergeSort';
import QuickSort from './pages/algorithmContent/QuickSort';
import RadixSort from './pages/algorithmContent/RadixSort';
import HeapSort from './pages/algorithmContent/HeapSort';
import SearchingAlgoIntro from './pages/algorithmContent/SearchingAlgoIntro';
import SearchLinear from './pages/algorithmContent/SearchLinear';
import SearchBinary from './pages/algorithmContent/SearchBinary';
import SearchInterpolation from './pages/algorithmContent/SearchInterpolation';
import GraphAlgoIntro from './pages/algorithmContent/GraphAlgoIntro';
import GraphBreath from './pages/algorithmContent/GraphBreadth';
import GraphDepth from './pages/algorithmContent/GraphDepth';
import GraphTopological from './pages/algorithmContent/GraphToplogical';
import DynamicProgOptimal from './pages/algorithmContent/DynamicProgOptimal';
import DynamicProgMemoi from './pages/algorithmContent/DynamicProgMemoi';
import DynamicProgTopDown from './pages/algorithmContent/DynamicProgTopDown';
import DynamicProgLongest from './pages/algorithmContent/DynamicProgLongest';
import DynamicProgKnacks from './pages/algorithmContent/DynamicProgKnaps';
import DynamicProgCoinC from './pages/algorithmContent/DynamicProgCoinC';
import DynamicProgEditD from './pages/algorithmContent/DynamicProgEditD';
import GreedyAlgoGreedyC from './pages/algorithmContent/GreedyAlgoGreedyC';
import GreedyProgActivity from './pages/algorithmContent/GreedyProgActivity';
import GreedyProgHuffC from './pages/algorithmContent/GreedyProgHuffC';
import GreedyProgJobS from './pages/algorithmContent/GreedyProgJobS';
import DivideConquerAlgo from './pages/algorithmContent/DivideConquerAlgo';
import BackTrackingAlgo from './pages/algorithmContent/BackTrackingAlgo';
import StringAlgorithm from './pages/algorithmContent/StringAlgorithm';
import AlgoTechTwoPointers from './pages/algorithmContent/AlgoTechTwoPointers';
import AlgoTechSliding from './pages/algorithmContent/AlgoTechSliding';
import NPCompletenessAlgo from './pages/algorithmContent/NPCompletenessAlgo';
import ComputGeomAlgo from './pages/algorithmContent/ComputGeomAlgo';
import NumberTheoEuclidean from './pages/algorithmContent/NumberTheoEuclidean';
import HashingAlgo from './pages/algorithmContent/HashingAlgo';
import AlgoRecursion from './pages/algorithmContent/AlgoRecursion';
import BitManiOpsShifMask from './pages/algorithmContent/BitManiOpsShifMask';
import BitManIntegers from './pages/algorithmContent/BitManIntegers';
import BitManTricksOpti from './pages/algorithmContent/BitManTricksOpti';
import TimeComplexSpace from './pages/algorithmContent/TimeComplxSpace';
import SelectionSort from './pages/algorithmContent/SelectionSort';
import NumberTheory from './pages/algorithmContent/NumberTheory';
import DynamicTopDownRecursive from './pages/algorithmContent/DynamicTopDownRecursive';
import IoTCoursePage from './pages/IoTCoursePage';
import IoTIntroDefinition from './pages/IoTContent/IoTIntroDefinition';
import IoTIntroHistorical from './pages/IoTContent/IoTIntroHistorical';
import IoTIntroImportance from './pages/IoTContent/IoTIntroImportance';
import IoTArchitectOverview from './pages/IoTContent/IoTArchitectOverview';
import IoTArchitectSensor from './pages/IoTContent/IoTArchitectSensor';
import IoTArchitectCommunication from './pages/IoTContent/IoTArchitectCommunication';
import IoTArchitectGateway from './pages/IoTContent/IoTArchitectGateway';
import IoTDevicesPlatforms from './pages/IoTContent/IoTDevicesPlatforms';
import IoTDevicesHardware from './pages/IoTContent/IoTDevicesHardware';
import IoTDevicesDevelopment from './pages/IoTContent/IoTDevicesDevelopment';
import IoTNetworkingWireless from './pages/IoTContent/IoTNetworkingWireless';
import IoTNetworkingTopology from './pages/IoTContent/IoTNetworkingTopology';
import IoTNetworkingSecurity from './pages/IoTContent/IoTNetworkingSecurity';
import IoTDMDataCollection from './pages/IoTContent/IoTDMDataCollection';
import IoTDMDatAnalytics from './pages/IoTContent/IoTDMDatAnalytics';
import IoTDMRealTime from './pages/IoTContent/IoTDMRealTime';
import IoTApplicationSmartHomes from './pages/IoTContent/IoTApplicationSmartHomes';
import IoTApplicationIndustrial from './pages/IoTContent/IoTApplicationIndustrial';
import IoTApplicationSmartcities from './pages/IoTContent/IoTApplicationSmartcities';
import IoTApplicationHealthcare from './pages/IoTContent/IoTApplicationHealthcare';
import IoTApplicationAgriculture from './pages/IoTContent/IoTApplicationAgriculture';
import IoTChallengePrivacy from './pages/IoTContent/IoTChallengePrivacy';
import IoTChallengeScalability from './pages/IoTContent/IoTChallengeScalability';
import IoTChallengeEdgeComputing from './pages/IoTContent/IoTChallengeEdgeComputing';
import IoTChallengeArtificial from './pages/IoTContent/IoTChallengeArtificial';
import IoTChallengeEmerge from './pages/IoTContent/IoTChallengeEmerge';
import IoTSecurityImportance from './pages/IoTContent/IoTSecurityImportance';
import IoTSecurityCommon from './pages/IoTContent/IoTSecurityCommon';
import IoTSecuritySecure from './pages/IoTContent/IoTSecuritySecure';
import IoTSecurityAuthentic from './pages/IoTContent/IoTSecurityAuthentic';
import IoTSecurityBest from './pages/IoTContent/IoTSecurityBest';
import IoTEcomputingIntro from './pages/IoTContent/IoTEcomputingIntro';
import IoTEcomputingAdv from './pages/IoTContent/IoTEcomputingAdv';
import IoTEcomputingEdgeDev from './pages/IoTContent/IoTEcomputingEdgeDev';
import IoTEcomputingEdgeAnalytics from './pages/IoTContent/IoTEcomputingEdgeAnalytics';
import IoTEcomputingHybrid from './pages/IoTContent/IoTEcomputingHybrid';
import IoTStandardsOverview from './pages/IoTContent/IoTStandardsOverview';
import IoTStandardsImportance from './pages/IoTContent/IoTStandardsImportance';
import IoTStandardsDataExc from './pages/IoTContent/IoTStandardsDataExc';
import IoTStandardsIndustry from './pages/IoTContent/IoTStandardsIndustry';
import IoTStandardsChallenges from './pages/IoTContent/IoTStandardsChallenges';
import IoTAIIntersection from './pages/IoTContent/IoTAIIntersection';
import IoTAIMachine from './pages/IoTContent/IoTAIMachine';
import IoTAIPredictive from './pages/IoTContent/IoTAIPredictive';
import IoTAIIntelligent from './pages/IoTContent/IoTAIIntelligent';
import IoTAIEdge from './pages/IoTContent/IoTAIEdge';
import IoTSubstainRole from './pages/IoTContent/IoTSubstainRole';
import IoTSubstainEnergy from './pages/IoTContent/IoTSubstainEnergy';
import IoTSubstainEnvironmental from './pages/IoTContent/IoTSubstainEnvironmental';
import IoTSubstainSmart from './pages/IoTContent/IoTSubstainSmart';
import IoTSubstainIoTEnabled from './pages/IoTContent/IoTSubstainIoTEnabled';

//Numpy pages import
import NumPyCoursePage from './pages/NumPyCoursePage';
import NumPyArrayCopy from './pages/NumPyContent/NumPyArrayCopy';
import NumPyArrayIndexing from './pages/NumPyContent/NumPyArrayIndexing';
import NumPyArrayIterating from './pages/NumPyContent/NumPyArrayIterating';
import NumPyArrayReshaping from './pages/NumPyContent/NumPyArrayReshaping';
import NumPyArrayShape from './pages/NumPyContent/NumPyArrayShape';
import NumPyArraySlicing from './pages/NumPyContent/NumPyArraySlicing';
import NumPyCreatingArrays from './pages/NumPyContent/NumPyCreatingArrays';
import NumPyDataTypes from './pages/NumPyContent/NumPyDataTypes';
import NumPyFilterArray from './pages/NumPyContent/NumPyFilterArray';
import NumPyGettingStarted from './pages/NumPyContent/NumPyGettingStarted';
import NumPyIntroduction from './pages/NumPyContent/NumPyIntroduction';
import NumPyJoiningArray from './pages/NumPyContent/NumPyJoiningArray';
import NumPySearchingArrays from './pages/NumPyContent/NumPySearchingArrays';
import NumPySortingArrays from './pages/NumPyContent/NumPySortingArrays';
import NumPySplittingArray from './pages/NumPyContent/NumPySplittingArray';

// Pandas pages
import PandasCoursePage from './pages/PandasCoursePage';

import PandasDataFrames from './pages/PandasContent/PandasDataFrames';
import PandasSeries from './pages/PandasContent/PandasSeries';
import PandasGettingStarted from './pages/PandasContent/PandasGettingStarted';
import PandasReadCSV from './pages/PandasContent/PandasReadCSV';
import PandasReadJSON from './pages/PandasContent/PandasReadJSON';
import PandasAnalysingDataFrames from './pages/PandasContent/PandasAnalysingDataFrames';
import PandasIntoduction from './pages/PandasContent/PandasIntoduction';
import PandasCleaningData from './pages/PandasContent/PandasCleaningData';
import PandasCleaningEmptyCels from './pages/PandasContent/PandasCleaningEmptyCels';
import PandasCleaningDataofWrongFormat from './pages/PandasContent/PandasCleaningDataofWrongFormat';
import PandasFixingWrongData from './pages/PandasContent/PandasFixingWrongData';
import PandasRemovingDuplicates from './pages/PandasContent/PandasRemovingDuplicates';
import PandasDataCorrelatons from './pages/PandasContent/PandasDataCorrelatons';
import PandasPlotting from './pages/PandasContent/PandasPlotting';
import PandasDataFarameReference from './pages/PandasContent/PandasDataFarameReference';


function App() {
  return (
    <div className="bg-white dark:bg-slate-950 h-max-screen">
      < Header />
      <Routes>
        <Route path='/learn/' element={< Home />} />
        <Route path='/cpluspage' element={<CoursesPage />} >
          <Route path='cpp-intro' element={< Introduc />} />
          <Route path='vs-code-guide' element={< InstallVsCode />} />
          <Route path='cpp-basic-struc' element={< BasicStruc />} />
          <Route path='cpp-var-scope-data' element={< VariableScopeData />} />
          <Route path='var-comments-in-cpp' element={< VariablesComm />} />
          <Route path='basic-input-output' element={< BasicIO />} />
          <Route path='header-files-ops' element={< HeaderFiles />} />
          <Route path='cpp-variables-type' element={< CplusVar />} />
          <Route path='cpp-constants-manipulators' element={< ConstantsandManipulators />} />
          <Route path='cpp-controls-if-statement' element={< CplusIfElseStatement />} />
          <Route path='cpp-for-while-do-loop' element={< CplusForWhileLoop />} />
          <Route path='cpp-break-cont-statement' element={< CplusBreakContinue />} />
          <Route path='cpp-functions' element={< CplusFunction />} />
          <Route path='cpp-funtions-params' element={< CplusFunctionParams />} />
          <Route path='cpp-return-values' element={< CplusFunctionReturn />} />
          <Route path='cpp-function-scope-lifetime' element={< CplusFunctionScopeLifetime />} />
          <Route path='cpp-inline-functions' element={< CplusInlineFunction />} />
          <Route path='cpp-error-handling' element={< CplusFunctionError />} />
          <Route path='cpp-function-libraries' element={< CplusFunctionLib />} />
          <Route path='cpp-array' element={< CplusArray />} />
          <Route path='cpp-multidimension-array' element={< CplusMultidimensionalArray />} />
          <Route path='cpp-passing-arrays' element={< PassingArray />} />
          <Route path='cpp-dynamic-arrays' element={< DynamicArray />} />
          <Route path='cpp-array-of-pointers' element={< ArrayPointer />} />
          <Route path='cpp-array-libraries' element={< ArrayLibraries />} />
          <Route path='cpp-strings-intro' element={< CplusStrings />} />
          <Route path='cpp-string-operations' element={< CplusStringOperations />} />
          <Route path='cpp-string-manipulation' element={< CplusStringManipulation />} />
          <Route path='cpp-string-conversion' element={< CplusStringConversion />} />
          <Route path='cpp-string-parsing' element={< CplusStringParsing />} />
          <Route path='cpp-format-whitespaces' element={< StringFormatManip />} />
          <Route path='cpp-advance-strings' element={< AdvancedStringsTop />} />
          <Route path='cpp-intro-structures' element={< StructureIntro />} />
          <Route path='cpp-array-structures' element={< StructuresArray />} />
          <Route path='cpp-structures-and-pointers' element={< StructurePointers />} />
          <Route path='cpp-structure-manipulation' element={< StructureManipulation />} />
          <Route path='cpp-dynamic-memory-allocation' element={< DynamicMemoryAll />} />
          <Route path='cpp-bitfields' element={< Bitfileds />} />
          <Route path='cpp-bitfields' element={< Bitfileds />} />
          <Route path='cpp-unions' element={< Unions />} />
          <Route path='cpp-structure-file-io' element={< StructureFileIO />} />
          <Route path='cpp-intro-to-pointers' element={< PointerIntro />} />
          <Route path='cpp-pointers-operations' element={< PonterOperations />} />
          <Route path='cpp-pointers-and-array' element={< PointerandArray />} />
          <Route path='cpp-pointers-and-functions' element={< PointerandFunctions />} />
          <Route path='cpp-pointers-and-structures' element={< PointerandStructures />} />
          <Route path='cpp-pointers-to-pointers' element={< PointerstoPointer />} />
          <Route path='cpp-pointers-to-strings' element={< PointerandString />} />
          <Route path='cpp-pointers-and-const' element={< PointerandConst />} />
          <Route path='cpp-pointers-and-oop' element={< PointersandOOp />} />
          <Route path='cpp-pointers-and-except' element={< PointersandException />} />
          <Route path='cpp-pointers-advanced' element={< PointerAdvanced />} />
          <Route path='cpp-objects' element={< CppObjects />} />
          <Route path='cpp-classes' element={< CppClasses />} />
          <Route path='cpp-data-members' element={< CppDataMembers />} />
          <Route path='cpp-member-functions' element={< CppMemberFunc />} />
          <Route path='cpp-encapsulation' element={< CppEncapsulation />} />
          <Route path='cpp-access-specifiers' element={< CppAccesSpeci />} />
          <Route path='cpp-constructors' element={< CppConstructors />} />
          <Route path='cpp-destructors' element={< CppDestructors />} />
          <Route path='cpp-inheritance' element={< CppInheritance />} />
          <Route path='cpp-polymorphism' element={< CppPolymorphism />} />
          <Route path='cpp-overloading' element={< CppOverloading />} />
          <Route path='cpp-operator-overloading' element={< CppOperatorOverl />} />
          <Route path='cpp-static-members' element={< CppStaticMem />} />
          <Route path='cpp-friend-functions' element={< CppFriendsFunctions />} />
          <Route path='cpp-templates' element={< CppTemplates />} />
          <Route path='python-intro' element={< IntroPython />} />
        </Route>
        <Route path='/python' element={< PythonCoursePage />}>
          <Route path='intro' element={< IntroPython />} />
          <Route path='getting-started' element={< PythonGettingStarted />} />
          <Route path='syntax' element={< PhythonSyntax />} />
          <Route path='comments' element={< PhythonComments />} />
          <Route path='variables' element={< PhythonVariables />} />
          <Route path='data-types' element={< PhythonDataTypes />} />
          <Route path='numbers' element={< PhythonNumbers />} />
          <Route path='casting' element={< PythonCasting />} />
          <Route path='operators' element={< PythonOperators />} />
          <Route path='strings' element={< PythonStrings />} />
          <Route path='booleans' element={< PythonBooleans />} />
          <Route path='lists' element={< PythonLists />} />
          <Route path='tuples' element={< PythonTurples />} />
          <Route path='sets' element={< PythonSets />} />
          <Route path='dictionaries' element={< PythonDictionaries />} />
          <Route path='recursion' element={< PythonRecursion />} />
          <Route path='if-else' element={< PythonIFElse />} />
          <Route path='while-loops' element={< PythonWhileLoops />} />
          <Route path='for-loops' element={< PythonForLoops />} />
          <Route path='python-recursion' element={< PythonRecursion />} />
          <Route path='function' element={< PythonFunctions />} />
          <Route path='lambda' element={< PythonLambda />} />
          <Route path='arrays' element={< PythonArrays />} />
          <Route path='classes-objects' element={< PythonClassesObjects />} />
          <Route path='python-math' element={< PythonMath />} />
          <Route path='python-datetime' element={< PythonDateTime />} />
          <Route path='pip-package' element={< PythonPipPackage />} />
          <Route path='try-except' element={< PythonTryExcept />} />
          <Route path='user-input' element={< PythonUserInput />} />
          <Route path='string-formatting' element={< PythonStringFormatting />} />
          <Route path='modules' element={< PythonModules />} />
          <Route path='scope' element={< PythonScope />} />
          <Route path='iterators' element={< PythonIterators />} />
          <Route path='file-handling' element={< PythonFileHandling />} />
        </Route>
        <Route path='/algorithm' element={< AlgorithmPage />}>
          <Route path='sorting-intro' element={< SortingIntro />} />
          <Route path='sorting-bubble' element={< BubbleSort />} />
          <Route path='sorting-selection' element={< SelectionSort />} />
          <Route path='sorting-insertion' element={< InsertionSort />} />
          <Route path='sorting-merge' element={< MergeSort />} />
          <Route path='sorting-quick' element={< QuickSort />} />
          <Route path='sorting-radix' element={< RadixSort />} />
          <Route path='sorting-heap' element={< HeapSort />} />
          <Route path='searching-intro' element={< SearchingAlgoIntro />} />
          <Route path='searching-linear' element={< SearchLinear />} />
          <Route path='searching-binary' element={< SearchBinary />} />
          <Route path='searching-interpolation' element={< SearchInterpolation />} />
          <Route path='graph-intro' element={< GraphAlgoIntro />} />
          <Route path='graph-breath' element={< GraphBreath />} />
          <Route path='graph-depth' element={< GraphDepth />} />
          <Route path='graph-topological' element={< GraphTopological />} />
          <Route path='dynamic-optimal-structure' element={< DynamicProgOptimal />} />
          <Route path='dynamic-memoization' element={< DynamicProgMemoi />} />
          <Route path='dynamic-topdown-iterative' element={< DynamicProgTopDown />} />
          <Route path='dynamic-topdown-recursive' element={< DynamicTopDownRecursive />} />
          <Route path='dynamic-longest-sebsequence' element={< DynamicProgLongest />} />
          <Route path='dynamic-knapsackproblems' element={< DynamicProgKnacks />} />
          <Route path='dynamic-coin-change' element={< DynamicProgCoinC />} />
          <Route path='dynamic-edit-distance' element={< DynamicProgEditD />} />
          <Route path='greedy-choice-property' element={< GreedyAlgoGreedyC />} />
          <Route path='greedy-activity-selection' element={< GreedyProgActivity />} />
          <Route path='greedy-huffman-coding' element={< GreedyProgHuffC />} />
          <Route path='greedy-job-sceduling' element={< GreedyProgJobS />} />
          <Route path='divide-conquer' element={< DivideConquerAlgo />} />
          <Route path='backtracking' element={< BackTrackingAlgo />} />
          <Route path='string' element={< StringAlgorithm />} />
          {/* <Route path='techniques' element={ < BubbleSort /> } /> */}
          <Route path='technques-two-pointers' element={< AlgoTechTwoPointers />} />
          <Route path='technques-sliding-window' element={< AlgoTechSliding />} />
          <Route path='np-complete' element={< NPCompletenessAlgo />} />
          <Route path='approximation' element={< BubbleSort />} />
          <Route path='computational-geo' element={< ComputGeomAlgo />} />
          <Route path='number-thoery' element={< NumberTheory />} />
          <Route path='number-eclidean-arithmetic' element={< NumberTheoEuclidean />} />
          {/* <Route path='techniques-sliding-window' element={ < BubbleSort /> } /> */}
          <Route path='hashing' element={< HashingAlgo />} />
          <Route path='recursion' element={< AlgoRecursion />} />
          <Route path='bit-ops-shift' element={< BitManiOpsShifMask />} />
          <Route path='bit-mans-integer' element={< BitManIntegers />} />
          <Route path='bit-tricks-ops' element={< BitManTricksOpti />} />
          <Route path='time-complexity' element={< TimeComplexSpace />} />
        </Route>
        <Route path='/IoT' element={< IoTCoursePage />}>
          <Route path='IoT-Intro-Definition' element={< IoTIntroDefinition />} />
          <Route path='IoT-Intro-Historical' element={< IoTIntroHistorical />} />
          <Route path='IoT-Intro-Importance' element={< IoTIntroImportance />} />
          <Route path='IoT-Architect-Overview' element={< IoTArchitectOverview />} />
          <Route path='IoT-Architect-Sensor' element={< IoTArchitectSensor />} />
          <Route path='IoT-Architect-Communication' element={< IoTArchitectCommunication />} />
          <Route path='IoT-Architect-Gateway' element={< IoTArchitectGateway />} />
          <Route path='IoT-Devices-Hardware' element={< IoTDevicesHardware />} />
          <Route path='IoT-Devices-Development' element={< IoTDevicesDevelopment />} />
          <Route path='IoT-Devices-Platforms' element={< IoTDevicesPlatforms />} />
          <Route path='IoT-Networking-Wireless' element={< IoTNetworkingWireless />} />
          <Route path='IoT-Networking-Topology' element={< IoTNetworkingTopology />} />
          <Route path='IoT-Networking-Security' element={< IoTNetworkingSecurity />} />
          <Route path='IoT-DM-Data-Collection' element={< IoTDMDataCollection />} />
          <Route path='IoT-DM-Dat-Analytics' element={< IoTDMDatAnalytics />} />
          <Route path='IoT-DM-Real-Time' element={< IoTDMRealTime />} />
          <Route path='IoT-Application-SmartHomes' element={< IoTApplicationSmartHomes />} />
          <Route path='IoT-Application-Industrial' element={< IoTApplicationIndustrial />} />
          <Route path='IoT-Application-Smartcities' element={< IoTApplicationSmartcities />} />
          <Route path='IoT-Application-Healthcare' element={< IoTApplicationHealthcare />} />
          <Route path='IoT-Application-Agriculture' element={< IoTApplicationAgriculture />} />
          <Route path='IoT-Challenge-Privacy' element={< IoTChallengePrivacy />} />
          <Route path='IoT-Challenge-Scalability' element={< IoTChallengeScalability />} />
          <Route path='IoT-Challenge-Edge-Computing' element={< IoTChallengeEdgeComputing />} />
          <Route path='IoT-Challenge-Artificial' element={< IoTChallengeArtificial />} />
          <Route path='IoT-Challenge-Emerge' element={< IoTChallengeEmerge />} />
          <Route path='IoT-Security-Importance' element={< IoTSecurityImportance />} />
          <Route path='IoT-Security-Common' element={< IoTSecurityCommon />} />
          <Route path='IoT-Security-Secure' element={< IoTSecuritySecure />} />
          <Route path='IoT-Security-Authentic' element={< IoTSecurityAuthentic />} />
          <Route path='IoT-Security-Best' element={< IoTSecurityBest />} />
          <Route path='IoT-Ecomputing-Intro' element={< IoTEcomputingIntro />} />
          <Route path='IoT-Ecomputing-Adv' element={< IoTEcomputingAdv />} />
          <Route path='IoT-Ecomputing-Edge-Dev' element={< IoTEcomputingEdgeDev />} />
          <Route path='IoT-Ecomputing-Edge-Analytics' element={< IoTEcomputingEdgeAnalytics />} />
          <Route path='IoT-Ecomputing-Hybrid' element={< IoTEcomputingHybrid />} />
          <Route path='IoT-Standards-Overview' element={< IoTStandardsOverview />} />
          <Route path='IoT-Standards-Importance' element={< IoTStandardsImportance />} />
          <Route path='IoT-Standards-Data-Exc' element={< IoTStandardsDataExc />} />
          <Route path='IoT-Standards-Industry' element={< IoTStandardsIndustry />} />
          <Route path='IoT-Standards-Challenges' element={< IoTStandardsChallenges />} />
          <Route path='IoT-AI-Intersection' element={< IoTAIIntersection />} />
          <Route path='IoT-AI-Machine' element={< IoTAIMachine />} />
          <Route path='IoT-AI-Predictive' element={< IoTAIPredictive />} />
          <Route path='IoT-AI-Intelligent' element={< IoTAIIntelligent />} />
          <Route path='IoT-AI-Edge' element={< IoTAIEdge />} />
          <Route path='IoT-Substain-Role' element={< IoTSubstainRole />} />
          <Route path='IoT-Substain-Energy' element={< IoTSubstainEnergy />} />
          <Route path='IoT-Substain-Environmental' element={< IoTSubstainEnvironmental />} />
          <Route path='IoT-Substain-Smart' element={< IoTSubstainSmart />} />
          <Route path='IoT-Substain-IoT-Enabled' element={< IoTSubstainIoTEnabled />} />
        </Route>

        <Route path='/NumPy' element={< NumPyCoursePage />}>
          <Route path='NumPy-Introduction' element={< NumPyIntroduction />} />
          <Route path='NumPy-Getting-Started' element={< NumPyGettingStarted />} />
          <Route path='NumPy-Creating-Arrays' element={< NumPyCreatingArrays />} />
          <Route path='NumPy-Array-Indexing' element={< NumPyArrayIndexing />} />
          <Route path='NumPy-Array-Slicing' element={< NumPyArraySlicing />} />
          <Route path='NumPy-Data-Types' element={< NumPyDataTypes />} />
          <Route path='NumPy-Array-Copy' element={< NumPyArrayCopy />} />
          <Route path='NumPy-Array-Shape' element={< NumPyArrayShape />} />
          <Route path='NumPy-Array-Reshaping' element={< NumPyArrayReshaping />} />
          <Route path='NumPy-Array-Iterating' element={< NumPyArrayIterating />} />
          <Route path='NumPy-Joining-Array' element={< NumPyJoiningArray />} />
          <Route path='NumPy-Splitting-Array' element={< NumPySplittingArray />} />
          <Route path='NumPy-Searching-Arrays' element={< NumPySearchingArrays />} />
          <Route path='NumPy-Sorting-Arrays' element={< NumPySortingArrays />} />
          <Route path='NumPy-Filter-Array' element={< NumPyFilterArray />} />

        </Route>
        <Route path="/Pandas" element={<PandasCoursePage/>}>
        <Route path='Pandas-Introduction' element={<PandasIntoduction/>} />
        <Route path='Pandas-Getting-started' element={< PandasGettingStarted/>} />
        <Route path='Pandas-Series' element={< PandasSeries/>} />
        <Route path='Pandas-DataFrames' element={< PandasDataFrames/>} />
        <Route path='Pandas-Read-CSV' element={< PandasReadCSV />} />
        <Route path='Pandas-Read-JSON' element={< PandasReadJSON />} />
        <Route path='Pandas-Analysing-DataFrames' element={< PandasAnalysingDataFrames />} />
        <Route path='Pandas-Cleaning-Data' element={<PandasCleaningData />} />
        <Route path='Pandas-Cleaning-Empty-Cells' element={< PandasCleaningEmptyCels />} />
        <Route path='Pandas-Cleaning-Data-of-Wrong-Format' element={<PandasCleaningDataofWrongFormat />} />
        <Route path='Pandas-Fixing-Wrong-Data' element={<PandasFixingWrongData  />} />
        <Route path='Pandas-Removing-Duplicates' element={<PandasRemovingDuplicates  />} />
        <Route path='Pandas-Data-Correlations' element={<PandasDataCorrelatons />} />
        <Route path='Pandas-Plotting' element={<PandasPlotting />} />
        <Route path='Pandas-DataFrame-Reference' element={<PandasDataFarameReference />} />


        </Route>
      </Routes>
    </div>
  );
}

export default App;