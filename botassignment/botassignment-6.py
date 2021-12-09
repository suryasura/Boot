dict_list = [{'name': 'surya', 'confidence': 1234123},
        {'name': 'surya', 'confidence': 1234678},
        {'name': 'santhosh', 'confidence': 1234456},
            {'name': 'santhosh', 'confidence': 1234456}]
  
print ("Original list : " + str(dict_list))
   
res_list = []
for i in range(len(dict_list)):
    if dict_list[i] not in dict_list[i + 1:]:
        res_list.append(dict_list[i])
print ("Resultant list is : " + str(res_list))
