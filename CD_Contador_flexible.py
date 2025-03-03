highnum=11
lownum=1
mult=5

for i in range(lownum, highnum, 1):
    if i % mult ==0:
        print(i)
        
cont_flex = [t for t in range(lownum, highnum, 1) if t % mult == 0]  
print(cont_flex)
    
