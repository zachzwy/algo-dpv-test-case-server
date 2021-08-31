file = open('./algo-dpv-tests/6-8.txt', 'r')
tests = file.readlines()

for i, test in enumerate(tests):
  if i != len(tests) - 1:
    test = test[:-1]
  str1, str2, expected = test.split(" ")
  expected = int(expected)

  actual = solution(str1, str2)
  if actual == expected:
    print(f'@#$str1={str1}; str2={str2}@#$')
  else:
    print(f'@#$str1={str1}; str2={str2}; expected={expected}; actual={actual}@#$')
