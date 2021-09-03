const deserialize = (problem: string) =>
  `import json

file = open('./algo-dpv-tests/${problem}.json', 'r')
data = json.loads(file.read())
tests = data["tests"]

for test in tests:
  args = test["args"]
  expected = test["expected"]
  actual = solution(**args)

  if actual == expected:
    print("@#@{}@#@".format(args))
  else:
    print("@#@{}; expected={}; actual={}@#@".format(args, expected, actual))
`;

export default deserialize;
