1.Css də px və % ölçü vahidlərindən başqa rem,em,vw,vh,vmin,vmax,ch,ex və s. ölçü vahidlərindən də istifadə olunur.Məs:div {height:2rem;font-size:2em} və s.

2.ilk olaraq header yaradılır,içində  nav ola bilər,sonra main içərisində section,aside,div,article,footer ola bilər.
  
    
            
3.display:inline-block block element üzərində sətiriçi dəyişikliklər etməyə icazə verir və element blok xüsisiyyətini də saxlayır.display:inline da isə block xüsusiyyətini itirir ancaq sətiriçi dəyişikliklər etməyə imkan verir.display:flex və display:grid elementlərin yan-yana düzülməsi üçün istifadə olunur.display:table xüsusiyyəti veriləndə element özünü table element kimi aparır. 

4.div{
    width:300px;
    height:400px;
    background:green;
    display:inline-block;
    margin:20px;
    margin-top:15px;
    margin-right:25px;
    margin-top:30px;
}
margin-right:25px;margin-top:30px; olacaq,çünki css en son dəyəri götürəcək.
