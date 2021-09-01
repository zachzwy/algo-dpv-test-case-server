file = open('./algo-dpv-tests/6-4.txt', 'r')
tests = file.readlines()

for i, test in enumerate(tests):
  if i != len(tests) - 1:
    test = test[:-1]
  args = test.split(" ")
  string = args[0]
  expected = args[-1]
  expected = True if expected == "true" else False
  dic = args[1:-1]
  
  actual = solution(string, dic)
  if actual == expected:
    print(f'@#$string={string}; dic={dic}@#$')
  else:
    print(f'@#$string={string}; dic={dic}; expected={expected}; actual={actual}@#$')
