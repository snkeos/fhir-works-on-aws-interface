module.exports = {
    reporters: [
      'default',
      [ 'jest-junit', {
        outputDirectory: "./../test-reports",
        outputName: "fhir-works-on-aws-interface-reports.xml",
      } ]
    ]
  };
  