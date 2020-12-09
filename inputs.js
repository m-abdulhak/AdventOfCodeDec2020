const inStr1 = `1028
1987
1938
1136
1503
1456
1107
1535
1946
1986
855
1587
1632
1548
1384
1894
1092
1876
1914
1974
1662
1608
2004
1464
1557
1485
1267
1582
1307
1903
1102
1578
1421
1184
1290
1786
1295
1930
1131
1802
1685
1735
1498
1052
1688
990
1805
1768
1922
1781
1897
1545
1591
1393
1186
149
1619
1813
1708
1119
1214
1705
1942
1684
1460
1123
1439
1672
1980
1337
1731
1203
1481
2009
1110
1116
1443
1957
1891
1595
1951
1883
1733
1697
1321
1689
1103
1300
1262
1190
1667
1843
1544
1877
1718
1866
1929
1169
1693
1518
1375
1477
1222
1791
1612
1373
1253
1087
1959
1970
1112
1778
1412
1127
1767
1091
1653
1609
1810
1912
1917
935
1499
1878
1452
1935
1937
968
1905
1077
1701
1789
1506
1451
1125
1686
1117
1991
1215
1776
1976
846
1923
1945
1888
1193
1146
1583
1315
1372
1963
1491
1777
1799
1363
1579
1367
1863
1983
1679
1944
1654
1953
1297
530
1502
1738
1934
1185
1998
1764
1856
1207
1181
1494
1676
1900
1057
339
1994
2006
1536
2007
644
1173
1692
1493
1756
1916
1890
1908
1887
1241
1447
1997
1967
1098
1287
1392
1932`;

const inStr2 = `1-9 x: xwjgxtmrzxzmkx
4-6 r: rrrkrgr
4-5 v: vvfvvvn
5-16 m: pxmrtmbmqmcldmmm
15-16 s: bsshsszslssssslqdsss
10-12 g: gggggggggzgvg
2-7 n: dntnrng
11-14 j: xrjflbmjszzjbjjh
2-6 r: frxrrrfjnmr
6-7 h: hplhgcsphh
4-5 w: wwwwz
1-6 g: ggdggnggg
3-4 c: cccc
5-8 k: kjgmkkfwxkwqkkgfnv
14-15 h: xpwhdjhhjhrdjkhfh
6-7 g: vgggggdhgsp
1-3 r: rtdcrthphrkzxh
15-16 j: jjjjjjstjjjjhjjjjj
8-10 k: kkkkpkkqkv
1-4 s: sssssj
2-3 d: hdbmbpswddwkkr
6-7 s: ssscssnss
8-9 z: zzzzzzzftz
7-8 t: glwvkgtn
3-10 n: nnnnnnnnnnn
5-7 z: lzzzzfhj
8-9 l: llllllltn
1-2 p: dpcppp
2-5 d: hcfdltbgt
13-16 r: rrdrrqrrrrrsbrrr
7-16 l: lllltllllllllllllrll
9-14 z: vzzzpzfzdzzzzzzfczz
3-5 f: ffffb
6-8 s: csssssjrbdsgs
9-18 r: rrrrrrbrrrjzdrrrcrr
2-5 d: fdzxdj
13-14 c: cclcccccccccmc
9-10 z: zzvszszjbnzzz
5-9 s: ssqshwsss
4-11 x: hxxxxjvdxcqplp
4-6 t: mxtrtttttttttt
3-8 w: wmwwwnbmtw
5-6 x: xsczxd
2-7 w: pwvtgkwwwrpjr
7-9 w: wwwwwwwwj
3-9 h: hhhhbhhhschhh
1-4 p: tlwx
4-5 w: lhzjwwwwmv
6-7 p: ppppglprp
2-16 m: jqmmmmmzmmmmmjmbxmw
8-10 g: zhggpgrrlctggg
7-18 z: pltbcznlvtzgzczzchbz
10-11 t: jttttgtttttt
3-8 k: kkkkkkkkkkk
19-20 x: xxxxxxxxxxxxxxxxxxwr
9-16 l: llllllflllllxpllzl
10-12 m: mmjmmmmmmvms
1-4 c: cdxvxczcc
7-10 n: nnnnfnvpncn
10-17 z: zszzzrzczxzfzzzzlz
4-9 k: kkkdkkkkfk
12-13 m: mmgmmqfgmmtmm
4-6 s: tdmmcs
10-16 n: nkfpnncncnnntmtc
2-3 w: vwhwf
7-17 w: wwfwwwqhwwwwcwwww
5-8 q: tkqrtqqsqkwq
9-10 p: ptpppppppd
1-5 f: cnncnmnf
2-9 k: kkjdsnsqkgprtqb
9-11 n: nplnnnnnnnmnn
4-6 r: rrkrzrr
3-5 z: zzzzsq
17-18 r: rrrrrrrrrrrrrrrrrx
5-8 c: rcccdcclc
1-9 c: vcccccccbc
9-10 x: xxxxcbxxxm
2-5 c: cccfn
8-9 c: cccccnctc
4-8 l: flrhfzwllm
1-5 l: fllfllrklx
5-10 j: jrjkrjjjjxgjqj
5-10 v: dsxvmvvjtsc
4-6 v: bsqvdghvnzdfvjcfvvv
6-11 m: mmmmmmmmmmpm
6-9 q: qqgqkcccsgqqjspj
2-5 n: nvsrc
14-15 n: nnnnnnnnnnnbnms
3-4 m: mmbm
3-11 h: hhbhhhhhhhhhhhhhhhh
7-9 k: kkkkbknkjv
11-15 g: ggvgggfgbgvvzjgxghgg
3-4 z: zzzz
2-5 w: wwwhww
9-14 j: jjjjjjjjtjjjjw
2-4 j: jjbljsj
6-9 w: bwtkbttwqvwk
1-3 l: lllpjl
9-10 g: ggfmggggsrggggg
3-5 t: ttwzxl
5-7 k: kkwtbckkk
9-11 r: rbgrrhrrrrrr
9-12 g: ggggggsggglnggg
1-5 b: bbbwjs
6-7 m: xkjmdmm
6-8 g: gggggwgw
12-15 v: vrvvvqvvpvzvvvvrhqv
15-17 s: hsnjsrsdxpjswsxsss
9-12 r: rnhnrrsrrrrr
1-3 d: ddnd
1-11 m: mmtxkcdrvcmx
1-18 k: kxkkkskkkkkktkkmkc
5-9 h: vfxhhshhvhhbhr
2-3 k: wtrcckttcqrj
2-7 q: wnqcqqxw
1-9 s: sqsssslsssssssssss
4-6 p: mwvpppzp
1-4 v: qlvnvv
10-11 z: lzzzzzzzznt
2-14 q: qwqqqqqqqqqqqfqqr
15-20 d: dddddzddddddddlddddt
11-15 m: fvsqwbnqmbnmgcm
3-4 c: fncnfdjzcxwbpcrn
4-7 z: jsxzzszzqtwzmcznfs
5-6 x: glxxxxrxfxxwl
5-13 b: pdbvhwjwnbdwbrbbjwf
7-8 h: hhthhhvvt
8-11 f: pfffffxffpbf
5-6 n: ndtlxnnnqdmcnv
10-12 s: sssssswssdshssss
15-16 s: ssssssssssqsssss
4-5 s: sssss
3-4 g: ggggg
3-4 c: ccjv
7-12 v: rrrngfwhslsbpvbmwnn
4-10 n: nxnbnnnbxnnn
7-15 d: fggdddpgslqgdwhdndw
6-10 h: hhzzghhfdchhjnm
8-9 c: cccccccnc
9-10 h: hhhhhhhhll
2-16 w: nwfwwwzwvrbmwwww
10-13 k: kkkksjkkskqtkkmkknks
4-9 f: fffwfffbkc
4-11 v: gcfkvvvvfvv
2-5 l: llflftlmlglc
7-10 l: llldljllgsbl
10-19 g: svcsnlshppvrxzghhzg
3-8 d: dddwdzvmddd
3-5 m: kpmmjpmmmdz
13-14 n: nnnnnnnnnnnnns
3-8 b: bkbbbbbbbbbbbbbd
2-4 g: jghfggh
8-11 m: mmmmmmrmmmm
9-12 j: pbjjpjnjxjjfsjzsjps
6-7 r: rrrrrrrr
8-13 v: vvvvvvvbbvvvvvw
4-17 p: tpppppprzpspbpplppr
2-3 h: wbhhzxhllh
2-15 c: nvbcckcpccrtccwccsc
12-13 j: jjjjjjjjjjjzhj
4-10 p: dznzpnxzppl
5-8 r: jrrrsrrrrr
7-10 q: gjqjcqqqqsqfqqq
8-12 k: kkkkkkkkkkkg
3-14 m: mmtmmmmmmmmmmmmmm
3-12 t: khgttqtcltshttwqgt
14-15 b: bbbbbbbbbbbbbqb
14-15 f: fffqfmffpnffffg
5-16 j: jlghwmmrbdvdfjbj
7-8 v: vvkbvvrv
2-11 m: qmcgxcshgwmfm
11-12 m: cmmmzfmcmmzmmmmjmr
6-7 n: hnnbnnnw
4-8 m: mvdtmstm
4-7 m: bcrmmjbpmmmsdnrmm
1-4 w: wwwww
12-14 j: jjjjjjjjjjjrjhj
2-9 h: ghhczbhblx
2-11 v: vmvvvvvggvjpvchvvpc
6-7 f: ffwfflghpwfl
3-14 k: krkmjkgkzcckjbkkk
1-2 c: cfcp
15-17 z: ztzzzdzzzzzzzzzzt
4-13 p: bmrpdwphzqvppktz
4-5 j: jjvjtj
14-20 h: hvchvhhhhbhthlhhhhhh
1-3 j: kqjp
9-13 x: fsxxxkxxbpkxmhlrdtfx
13-14 w: wwpxwwwwwwgtwwcwwww
2-5 p: wppxkq
13-15 x: xxxzxxxbxxxxxxvxs
5-11 q: qvqqqqxqqqqfqqq
8-12 q: qqqqqqqvqqqq
8-10 m: mmmmmmmjmn
17-18 t: ttttrttttsttttttttt
9-13 h: hhhhhqhjlvhhqhhwh
8-9 s: ssssshsst
9-10 v: qvvtvsvcmzvvnpgvv
7-12 d: djcpndppsdddfdsdd
2-3 z: dgzwvbrzzbgw
1-4 k: kwkl
1-9 d: dkdmdsdwdzvlpv
10-11 h: hhhhhhhhhhh
9-10 f: ffffffffff
4-7 d: ssddddxp
18-19 j: jjjjjjjjjjjjjjjjjsj
7-11 m: mkmmrmmlrzsmgm
1-7 k: kkkkkkknk
4-5 w: wwwwj
6-13 s: xslmsfgsssssmslsstqd
4-5 z: zzzch
9-11 j: jjjjjjjjjjj
4-7 h: hjhhkdh
5-14 v: vvvvglvvdvvvvv
5-6 q: shqnjdqqq
1-5 q: dqqqq
5-7 z: zzznzzz
5-9 s: vwsfsxssd
4-5 f: sffffv
5-7 b: xllbbdb
1-14 j: rtzjqkpnkjlrhjcjqj
8-10 w: wwwwwwwfwxz
3-6 g: sggtlggswf
11-14 n: nnbnnncnnsgnnmknn
6-15 c: cclcnccctcrcxqmd
5-8 l: lmllxwpl
4-11 p: pppppppcpkdp
1-4 w: zwwx
1-3 g: nlfpgfzqkzn
11-12 w: vbwwgwvwrwlwwmwwwjw
4-12 j: vzfjgjrkzdrxqfh
1-2 r: frrq
1-4 k: vkkkkk
11-13 d: pndlftgdpdhld
1-4 r: prrvrrrrfrrrrr
8-9 m: fmmxmmmmmmm
1-2 x: xcpxc
4-16 n: rhbndvjnnsnfnwnnm
2-10 g: fkzwxtqmgm
11-19 p: bpppqpppppplpppphpsr
9-13 g: ggggthggggpjgqgslggq
4-5 m: mzmmxcfwmdpz
2-13 t: tttttttptttts
3-7 q: qqvqqqcqq
6-9 j: jsjjjjccjwjcjjj
7-10 r: rdlrrrrrrr
9-12 r: wrrzsrcrgcbrhqvrhlp
6-7 j: jjxjjzhxj
6-7 m: mmmmmmmm
1-3 m: mldvdmxmbk
10-11 f: ffffnffffkqf
5-17 f: ffffsfffftfffkffn
4-5 b: fbwbhvx
14-16 g: ggggggggthgggggsvd
2-3 s: cvsbw
5-10 g: qltgnfghgcrgpnzdsvng
5-6 p: ppjbpnppxg
3-8 j: lgjrzwdvdnwvrnj
2-4 c: cdcc
6-7 l: llflrhlllgklh
1-2 p: tppp
16-17 g: gggggggvggggggggg
3-14 f: fhfdffftfbggpkfgf
16-18 b: bbbbbbbbbbbbbbbbbbbb
5-10 v: thqvvkvlwvdvjzzst
13-14 p: ppppppppppppptc
11-14 t: tkttczttttsttmcnltm
3-4 w: nvxl
4-6 f: fpflfwftk
4-6 h: xhhhhh
15-17 t: tttttttttttttttlv
10-17 j: jjjjjjjjjsjjjjjjd
2-4 s: jcgs
7-9 q: qsqqjhqndsqkqqpvqqr
2-3 p: tnpplcmdpfn
2-5 c: crvmk
1-7 d: tsmzcgddnddddrdxsq
8-9 c: rlfcpctpncv
6-9 f: tkzfhffdf
13-15 s: sssmsscfvsssdsg
6-8 s: ssjsssjrscsss
7-10 f: fffffffkfff
1-6 k: jqtdhpknkkk
11-12 t: tttttttttttf
9-16 d: swjbddfpfbntmprdd
18-19 v: dvvvvvvvvvvvvvvvkvvv
2-5 j: kjjcqjj
11-12 d: dddddddcddld
14-16 f: fffffffffffffffk
4-7 x: nxxxxxxn
10-18 p: pppppppppppppppppr
8-9 k: ktkjkkkkfvklkz
9-15 h: hhhhhhhhchhhhhhhhh
18-19 v: hvkvvvvvvvvvvvvvvqc
1-8 s: xzbxgsxshgl
2-6 p: ppsjpglptchpzbdhj
6-7 n: nnnnnnnc
2-7 j: jhtjjjjj
11-12 b: vnblqbxkbbwb
4-5 z: czzzcztsz
4-9 x: wxpvxxxfxfxx
9-12 w: wwwwwwwwwgwwww
2-5 k: cntkkq
10-12 l: vljplljlllllllll
1-4 t: tfmvst
6-7 d: rddddddwd
2-6 h: bhvwhl
5-8 c: ccsgccncwgjtcbhccckk
5-6 r: rrrrmr
3-8 h: hcrhhjrbhh
2-4 s: xndshswk
2-7 m: mmrqmmlp
7-9 n: nnnbfpmnfnknxnndn
6-7 f: fvffffb
6-8 h: vhhhhhtk
6-7 j: jjjjjwjjs
1-5 r: rwrrrr
3-4 t: tlzk
2-7 k: kkkkkkk
6-11 q: rqqqqqwflqqjqq
5-7 l: llllglll
6-14 r: rrkrrxrmrrrrrc
1-8 w: lrwpzvhhcwtbrwwpwww
3-13 b: kbjhskpbrwqpbcbbkb
6-9 d: ddddbddhdddddddddmg
14-15 n: nnnnnnnntnnnnhf
2-18 k: cgjpktthdbfxrclqwzpl
5-14 w: wwwwwbfwzwcwcwz
5-7 s: tfhssgrsnbssfl
1-18 l: wdkwkdlslbllllgzfm
1-17 h: jhhhhhhhhhhhthhhhh
7-13 w: wwvwwwwwrwwww
1-3 r: rgrdrx
9-11 t: dnxckkwpttv
2-12 c: cgqxrszcckcd
4-13 q: qkchpbqqtrtdztrq
2-9 d: ddddsddddd
9-19 p: pppppgppppqpppppppp
8-9 l: lllhlllll
7-8 h: hhhhhkhvwbhmh
11-12 w: wwwwwwwwwwwnwwww
2-3 d: jhcd
13-16 n: nnnnnnnnnnnnndnnmnn
6-7 d: dllpddkdd
6-7 n: nnnnnkp
7-14 v: vvbcvrvvkmvvsv
5-7 j: jjjjcjs
4-10 l: ldllllllll
4-5 x: rxxxx
15-16 q: qqqqqqqqqqqlqqqw
13-15 m: mmmmmmmmmbmmzmbm
7-10 k: skkkkkkkkq
9-15 m: mghxpjzqdhjcbmdl
2-4 t: ttsnwzbdj
6-7 s: hqtkgtr
3-4 n: twpknn
1-3 l: wrldlsdl
5-6 l: qlxncf
4-5 s: dvsxs
7-9 t: rktsrfwttttgwtzgft
1-3 l: flsf
6-10 c: cchczccccj
1-3 k: bktw
2-4 h: zdqxgrfkfhljhqhkgmfc
16-17 s: sssssssssssssssvs
4-8 p: plpfmnhsppnpwnx
5-10 k: kkkkknkqkk
4-11 s: nsqnssssvqsm
6-14 j: jjjzjwczkjjjxjjcjjxj
3-7 t: tnnbjjhtd
7-8 l: llllllll
4-11 z: cwsvrtszxrgh
2-11 x: sxcxxxjxrxkxdxx
11-15 m: mmxmbxmmdmmmmfmmfmm
10-13 l: tllllwzlzlrbllllhnp
5-6 k: kkkjkmkkkg
4-7 f: wqqfmffffkp
1-9 b: bbbbbmbbbbhbbdzbbtn
10-12 h: hhhhdwbhhqrhhhdnxhr
1-8 r: qfpnfrrrrz
16-20 b: bbbbbbbbbbbbbbbbbbbb
1-5 c: hwqccmwcctcnclcb
6-13 c: clccccqqcccjczpgj
13-14 j: jjjjjjjjjjjjjh
2-4 j: jkfp
2-7 d: qqxdcdjqg
5-6 r: prrrrd
7-8 l: llllllll
2-3 w: nwlm
9-12 v: vnknxncvgvrww
6-16 s: sjnwfsksnszcglxs
5-17 z: zzmkzzzzzntzjzbwpdjz
12-17 j: ljjjjjjhjjwtjjjjdjwj
8-10 s: dnnjlfkxls
2-6 m: jmmqmdkjm
9-11 m: mmmcmmmfsmmm
14-16 p: ppppptpppphrpxpppp
4-15 d: dfkfxdddldddddddlddp
12-14 q: qqqqqqqqqqqwwgq
1-6 g: tgggggmggggdg
10-18 w: wwwwwwwwwbwjwwwwwt
8-9 t: ttkttcttsrgrzlftpt
3-5 j: jjjjjjjjjjjjjl
17-18 c: ccccccczcccccccccs
4-9 d: hjddddddddm
2-4 x: lxjfp
11-12 v: vvvvvvvvvvjv
1-4 z: fmzblzvzm
4-5 h: hhshhh
3-6 t: ptvrtt
7-15 k: kkkjzkckgckskpkk
12-15 w: wwwwwwwwwwwftwdw
3-5 z: jrhns
5-6 n: pxmnzn
1-3 b: bbbkbbbbbbwb
1-10 r: rrjrqrrwrrrqv
11-12 w: wwwwwwwwwwwwwww
5-6 j: jsjjjp
6-11 h: lhbbvmhwrhh
18-19 q: qqqqqqqcxqqqqqqqqxwq
17-18 l: llllllllllllllllxql
3-4 j: jjljjn
8-10 z: zzzzwnzlzggz
6-7 t: tttttft
11-12 f: ffffffffffnf
2-8 b: hqbbbbbsbb
4-5 w: stljwbxpw
1-2 z: grxfpw
6-8 w: wwwwpwwxw
8-14 z: zqzzzzzvzzzzzzgz
4-11 b: cckgrcmbpvbbw
2-9 d: xqxbdddjds
3-6 x: xxrxxx
15-16 n: nnnnnnnnnnnnnndnn
6-11 x: lqmxxxsxxfxxxxlx
1-12 s: vssssshssmsk
1-16 m: bmgkkmwmmzvmmmmmwflv
3-15 t: thkvttsltnbgztt
9-17 z: zzzzzzzzzzzzzzzzzz
4-6 f: fjwfff
3-9 d: ddddddddd
6-10 k: kjkbkkckxkknqkkdc
6-7 n: nsnckwnmn
7-13 t: ptbtjqttwwtftpntdq
7-10 r: wrhhrrrrrwrrrrvqrms
2-3 c: zcrwhtccb
5-7 m: nnwmmdmmmccv
3-5 j: rtjjmjrjl
5-6 s: dssjhsdmbksrks
16-18 c: ccccclcccclccccccc
7-16 b: qpzgqxdbssmzptrv
6-8 b: bnsbbgdbggxbbszbm
1-10 h: lrpstqvhhhhf
4-6 s: tvssppwvss
3-4 g: qqqhcd
4-7 c: qxcqzccckxcpcxcw
1-13 m: nbwdmspmmwbbmm
1-2 j: xjrczrk
9-10 w: wwwwwwwwwd
2-4 h: hhhq
7-10 j: bjmrrjsjthjnnjjxjjd
3-7 f: srfwwfvf
3-4 b: nbbzb
3-5 n: nnnnn
7-8 f: fxfnfffzpqffgdf
10-12 k: kkpkkkpnkkmkjbkk
9-10 k: jkkkkkkkwqk
4-6 z: rzzzzs
4-7 v: vvvtvvjq
6-12 z: dzjnzczzpzgzzzx
6-8 s: smsvbkswslssrdfjsc
5-7 b: bwbbbbbbr
1-3 d: kddbsmmbv
3-4 b: bbbb
5-8 r: rqrrdrrr
7-8 m: mmmmmmzm
9-11 q: xvnlfvhxqfql
3-4 w: wfwj
1-3 q: gqqcqg
1-2 q: cqlxrq
6-12 s: swwjjssjsstmqfssdh
2-4 q: bqqq
5-6 c: ccccbscgfc
14-15 x: xxcxxxxxxxxxxxm
6-12 f: fzfchfnrxfrdffhfl
14-17 g: gggggggggggggjgpgg
5-8 n: njkcngznn
10-13 d: dddlqddddvddr
2-4 c: xgcg
2-10 s: sxsnsdmszwmsss
6-12 q: qbcqspqqqkqrq
6-16 n: xnnnnnnnnnnnnnnfnnn
6-12 s: tssnssmsssssssssnhr
1-4 v: vwvvv
8-10 h: rzmhhjvqhht
1-4 t: ttjdjftfctt
1-4 k: nkkz
1-2 q: vkvqkqq
9-19 n: qxmjqxnxnblqnnqfgsrd
15-16 h: hhhhhhhhhhhhhhghz
2-5 g: jggpxdgwjpsrv
12-13 c: xccccpccrcccc
1-13 g: nfgbghqrljstggcgq
14-17 g: gggggggggggggmggggg
4-14 s: sssbsssssssssgs
1-10 d: rcxvxcgddnhwd
4-14 g: vccvdldqdgzltq
8-10 z: zzdczzvrzzzzr
5-10 t: ctgtttftqtrbt
3-5 v: vvrvx
9-10 w: wwwwwwwwwwwww
4-6 c: hgccmcccc
16-18 s: ssssssssssstssscsh
2-7 z: zzflfrtdx
4-10 v: vvlsvvvvkrc
10-16 d: ddddwddddbdgdddwd
3-4 v: gkbqbtrv
3-4 h: cjdqvwhhththvx
3-5 b: bbbkbrb
3-5 m: ptkqdgsmbcmmblwp
4-17 q: mlqqgsqqqfqkcqqxqq
6-17 m: mdvqvmmxlmzmvmmdm
1-3 r: hrrtrrrrrrrrrwlr
3-5 j: jjjjhj
11-12 q: dqpqqqqqqnzlqq
8-11 d: dddnddnddtdddd
3-16 d: dpddxtlqsqldrpddq
7-13 z: szhzmmzzzzmzzzz
6-18 h: mkxxqtbnnjgnvxnhhhc
4-5 n: nknfrhpn
16-17 d: dddddddgdddddddddd
14-16 w: wwwwwwwwwwwwwwwww
2-3 t: rttfdstqpdtg
3-4 s: gghrfxbfshqssj
1-9 j: bjjjjjjjhjjj
1-2 p: xmpgppppppp
9-14 k: vqpxrkmskfpnxq
1-5 x: xxxxx
1-14 p: bsxnwvpkphdppphpkwp
5-12 d: xdddmzddfddc
9-10 v: gvvvvvgvhnvw
2-7 x: xxxxxwgsvmqnkxv
3-15 c: ccscccccwccccccc
5-8 w: nsvgwzdf
7-14 w: wwwwwwwwwwwfwswcw
5-10 r: qrrlwcrrwz
7-12 f: hfnphfpjffstff
2-6 h: hqjhmph
3-13 x: cpxxxzcrbjxxxb
4-8 k: kkkkktkkkkfkf
7-10 g: gggghghsgwf
8-9 s: sswswssggss
6-10 l: qlllljllhlll
8-11 c: cccwccrbcbccc
5-6 x: xxxxxxg
1-3 w: cwpww
8-11 v: vvvvvvvvvwvv
1-2 b: bbgl
7-10 b: zbkbcbbbsbb
13-15 t: tttttgtttttttktttt
12-14 x: xxxxxxxxxxxxxqf
6-7 k: kmrkkwmk
4-5 m: mmxjmdrhzkmxxphjmz
2-3 t: tnvtndw
4-5 x: xxtxxtxzf
1-3 m: nwmglfscmwrjtzp
10-11 c: cnccckcckcwdc
14-19 b: tvbmrqtchwblbqbbqbb
9-10 x: fxxxxxxxjxx
4-5 g: gggggkggx
8-12 k: kkkkkfkpkqkwkkk
2-6 v: chpvkvt
4-10 r: rmbjmcrgrrfrtmblhw
4-6 n: rnnwtn
3-10 v: htclcjhjkdv
10-13 w: wwwhhwwwrwwzww
18-20 w: wwwwwwjwwwwwwwwvwtww
7-8 w: phrwbwwmc
16-17 q: qqqqqqqqqqqqqqqqx
2-5 k: kzknsxkkgtvmwlfrmrg
3-4 b: zbbbb
5-8 v: hfclvvpc
3-15 t: ctfthpmgznjnhgtth
1-6 t: httttq
5-6 w: wwxhgww
3-5 m: fmtnmmm
11-17 n: xnnchnzpsmcslvzcn
5-6 m: mmmmcm
1-7 r: rwsgcgvjmtxwkqtr
6-16 m: mmmmmmmmmmmqmmmmmm
5-10 s: sssggssssjsssmsss
9-14 p: ppfppzppnvmpqdvpp
2-4 l: wclwrlrdvh
6-17 g: gggmkglggwgpgkmglt
5-7 z: zzzbzpz
4-5 q: qbqqlzpqg
10-19 h: hhhhhhhhhrhhqhhhhhhh
6-7 m: nfnxmsmhtmhsmmmmgmsl
2-3 m: mkfmmm
8-10 j: xrjdnjjjnjjcjjjjjj
3-6 x: xwrjxhjxx
6-7 z: zzzzzzzg
8-17 k: kkkkkkkkkkkkkkkkk
6-9 n: rnnxnnbwnsnnwn
6-8 m: mkmmmsmm
4-6 q: qqfxqqq
2-8 s: hxmfbkszk
6-7 r: rrrrrrr
2-5 h: hhqzhhhh
5-15 b: bhbvnrbrbblbbhh
12-13 d: ddddddtdddvhddd
5-6 f: fmfcfwf
4-7 j: njqfxjjjqjjvdj
6-9 g: fggkggzgghrv
9-12 b: vbblbxpfrbjbgpwxb
1-8 s: tzcdrktsqjsxssfsssh
10-14 f: fffffffffcffffffffff
13-17 p: pqpppppcpbwpppnprppk
16-17 n: nnnmnnnnnnnnnnnsj
10-16 k: kkkkkkkkkkkkkkktk
8-11 w: wwwwwwwwwwm
2-5 q: qqqqqq
2-7 m: mmmmmxg
2-9 m: mmvlggdmr
3-9 s: wxdbmlcrlpnzmkfdfs
12-16 z: zlxzgznqqfzsqtwc
6-7 f: flvmfffjffbmgfzfgfp
2-3 g: cgggqgxqgv
2-3 f: rffvf
1-8 h: vhhhhhhvhhvhhhhf
6-12 x: vzdxxxgxtxzxxxqc
4-5 w: rwwwwww
7-10 r: brwrcrrkcsj
6-10 q: jvqqqqqqqmq
5-18 v: lvhvvwvvvvvlvlvvmv
6-9 z: zzvzcwlzslhlzqsf
3-6 x: sdknfxvwtcfcjgmv
8-9 l: lqcwlllsllll
1-4 k: dgklv
2-6 q: qqqptfqqqqq
4-7 m: mrmcmmmm
4-5 r: rrrblg
1-8 c: qcccccvntc
6-7 m: mzbxmmmnhmqcmmqvbmcp
2-4 t: ptvqx
9-10 s: gpssssssgss
4-18 b: bbbbbbbbbbbbbbbbbfb
4-5 f: ffffgf
3-6 l: lslglw
1-5 l: ltzlllsdlmrllkvbztvr
15-19 l: llllllllllllllnllll
10-11 j: jjjjpjjjjjncj
2-3 w: wfwgd
1-7 r: vrrrzrr
3-7 k: kkkjckkkgkbtvm
9-12 k: kkkkkrckcrkk
1-6 b: hpbjbvb
6-8 s: ssssssvss
2-4 x: mpxk
6-10 x: xxxmrwhgxxxjx
7-8 x: xxphxxxxx
6-19 n: mdrlnnpnjndqgnkfwnnn
2-5 q: qjwtbmkhtnxm
15-17 j: xjjjjjbjqjjjjjjqjjjw
5-7 x: pxxxxsxxsxx
3-6 t: ttttrp
8-11 f: fffffffffrkzf
6-8 r: glsprkbp
10-12 m: mmmmmmmmmmmsm
13-14 z: zzszzzszzbzzzplzzz
19-20 c: ccccchwccccccccccncb
7-12 z: qzggglzlhshnrwt
12-14 z: zzzzzzzzhzzwzc
1-2 s: sssl
1-3 q: fsqmwq
1-6 z: zmzztzkzznmflqffz
9-11 b: bwbbjbbbtlbbn
4-6 s: nktszz
2-5 j: nqjhjkb
7-16 l: lrlllllllmllswlsl
2-3 f: fjqvfff
7-15 w: hwxghddqwwwwwww
2-4 z: zgzfx
5-6 h: vhhjhthh
13-14 h: hhhhhhfhhhhhhhphhhh
16-17 k: kkkkkkkkkkkkkkknx
7-15 l: dllllllmlllfllf
2-6 w: mtkwwwww
2-7 k: zpkkgldk
7-9 d: htmtjddddddqvddcd
4-9 v: rvfbbwzdwcvvqv
6-11 m: mmvmbvmmmsmmlmmm
3-8 p: xpxppsgpbxp
2-6 f: vffbszhvvrdfkxc
8-11 v: lvrrlvvqqvr
5-17 h: hdhhbhhzhhhhhhsbl
8-10 f: fhgffgfrfqtf
9-12 s: ssssfssdpssswf
9-12 m: mmmmmmmmpzgmmm
7-9 l: zlmllvwlllldl
8-11 m: mmdmfmmdxbmxbmm
1-4 m: fklssmffwzgqcvdpm
13-14 c: cczcccccccccccc
5-9 f: frtkfpffsfff
5-8 f: ffffgffr
3-8 m: mmxsmmmb
1-6 m: mdmmmm
1-2 h: hhdtmhwfpt
4-14 d: dmrkdvddmdsdddbsgd
6-7 c: cxccgcccc
6-12 v: xcqvjvvsdvvvpv
11-14 d: gltkjvddwjdkrln
2-13 f: ggffllflfbfffqkfmf
10-13 c: xkvcccccrmccccc
17-19 q: qqsqqqqqqqqqqqqqfqmq
8-10 t: ttttlttwtlt
4-5 f: wffrd
2-16 v: tvhvvqvrvvvvvvqvvf
2-4 c: cccc
3-8 z: zrzzpzlzzhsdxqqfx
6-10 k: kkkkkkkkkk
5-7 r: rvrrvrz
14-15 w: wwwwwwwlwwwwncwvwjk
6-11 q: qfhxqqgqqqsvcpr
4-7 f: kflfffzff
2-14 t: rtttttptlxsttt
11-15 t: ttttttttttftbvqttt
6-10 c: cckwlchltchcczgw
3-8 s: ssssvsqnss
1-8 h: mhhhhrhhh
13-15 b: bbbbbbbbbbbbbbnb
15-17 p: dpppppppppspppcps
5-12 l: xbfjglklphtl
2-4 v: vvvvbvwpvvvrv
3-5 k: plhjkkqkskz
6-12 z: zzzzzczzzzzk
2-3 j: xvjljj
6-7 r: rlrrrrrrzrrzrrr
1-12 t: mqrkgpktbsqxg
10-13 z: pzmzzxpnzxpgzzzhzz
5-13 s: gslsskvgxssssnpj
10-14 m: mmmmmmsmmmmmmk
2-5 b: tnbdsfwdzxrkjdb
2-15 h: hnxhzhmhhhhhwwb
1-4 c: ccccccc
9-10 b: bbbbbbbbbl
4-5 j: jsjjj
3-6 n: xmmnppbn
11-12 m: mmmmmmmmmmmm
2-4 r: jrgrcpvgctrrr
3-4 g: gggr
14-17 n: nhnpnnnnznnnnnnnknnm
4-5 k: krkkf
11-17 h: hhdhhhhhhhhghhkhx
5-19 q: dqbcqqqqsqqzqqqqqqv
5-16 t: ttrkttttstwttttqdt
11-18 h: dhhhhhhhhjhtjhhhhhh
5-8 c: ccccrccfc
1-3 v: nvvnv
7-12 m: prmmzmtmmmssdmmmmt
15-16 r: rrrrrrrrrrrrrqfr
7-19 b: djbbbbqjbdtbslbgbbmb
10-13 w: wwwwwwwwwwwwww
5-15 p: mbpcjqmmhpppkfmrbcww
2-4 n: nxbjknms
5-11 s: hxhcsldmxshdksvsss
12-16 q: qqqqqqqpqcdqqtwkqvq
2-7 j: tjlpcjjjjnj
6-7 s: ssssskm
1-4 t: tttttx
5-10 q: pqmnqrlqchbjzqqvq
11-15 q: qqqqqqqqqqhqrqqrqq
3-5 k: jhkgkxkqfskg
14-15 f: ffvffmfffffffsffqm
4-5 x: xxfxhfxx
2-4 b: ktbv
3-4 t: wjtwxvxctrcttb
1-3 s: shssg
8-12 z: skkzbdpzdkzzz
1-3 f: rlfffqft
5-8 s: fsrcnjsgsmgs
7-17 v: vvvvvvvvvvvvvvvvvvv
4-5 k: kklmq
8-17 h: hhhhhlvghwkhrfzhxh
17-18 n: nnnnnnnnnnnnnnnnnn
3-10 h: mhhhhrhznwvhh
8-9 x: xmxxxxxxx
4-5 p: ppppk
11-13 t: tttttttttttjtcn
3-4 q: qqvhz
3-8 l: gbpqclnkwlhdlml
12-13 f: fffffffffffrf
3-11 s: ssjssssssslssss
6-7 b: bbbbbwbb
7-9 r: krrrrrfrj
13-14 b: bbbbbbbbbvbbbp
2-4 x: ltgbx
7-10 r: smrrrrkjrrr
3-7 n: vnqpngjdgrw
7-18 t: ttltqtsktrjgxtqhtt
2-5 v: dvvxbvvvnk
2-5 n: nnnnnpn
1-3 t: nttmtx
3-4 z: zpszz
1-12 p: pmpxphlpppppppqppp
3-4 v: qvvvvvv
9-12 g: gwgggggggtgqgg
2-4 n: knpn
3-13 d: hncbdrvpddddcfddd
5-9 s: ssnspslslsfkpskss
1-2 s: ssczgkvtlp
5-6 p: pmvpzpppkm
1-4 j: jjhr
5-6 s: ssssxl
1-3 t: ttrt
16-18 n: nnpnnnnnnnnnnnnnnnn
4-5 n: nnfnl
1-4 b: bbbb
7-8 l: nljlllkhl
11-12 n: nnnnnsnnnnnnnpn
5-10 k: kkkkckkkkhkkkkk
7-10 s: zfsssfldxsvqsxdsqs
5-6 q: qqqqqp
6-7 q: qqqqqqq
14-16 w: wwdhmwwjwwwwnwwlwwwv
8-9 l: llllllldll
12-14 c: ccrccccccccrcccccccc
1-3 n: qnwnh
1-4 l: mlll
1-3 s: sssssss
4-15 h: mhclhhhjllhhhgh
15-16 x: xxxxxxtxxxxxtxttxx
2-4 r: rmjh
6-9 z: zzzzzpszt
17-18 n: nnwnnnnnnnnnnnnnppnn
8-11 v: vmvmvlvbvvvvv
7-8 b: bbbbbbdf
2-5 k: kkdkk
8-9 d: dddsldddvxlhd
7-8 h: hhhhkhxshxhn
12-14 c: vcchpxcnmgkctpqcc
1-5 w: wwwwww
1-2 x: xdmk
1-9 p: pbfvrdpqqn
2-4 s: mtnvzhnzs
4-6 t: cttxvtttx
4-8 t: qttmtzttkwftrjk
7-9 c: cccccccccc
2-18 j: zjjqxjfqqlmjrjhjqx
2-5 q: qmkqgq
5-11 k: kkkkkkslzkkkkkrx
16-18 h: hhhhhhhhhqhthhhvhh
5-13 h: hhfhhhhhmhhshhhhhhh
10-12 r: rkrrrrrmrrrrrr
8-10 n: rnnckhmjnxmfggsgtnnn
19-20 c: qsccznccccccnccccccq
1-4 k: wtkck
7-8 s: sssmssjssss
3-5 l: llslv
3-7 t: tvgjqgjbvtgpkt
13-15 b: bbbbbbbbqbblrbbb
9-10 z: zzzzzznzzb
6-16 c: kpcnsccgccxfwccl
2-3 d: ddbd
10-16 v: vvvvqrvvsvvvvvvl
3-12 d: dzdxxhddnlkddddk
8-9 b: khbbbfbbbbb
11-12 z: zzzzzzzzzzzz
5-15 n: bnlvnnrjbnqlnnn
1-2 q: mqqpzjc
11-13 h: hhhhhhchhhhjhh
8-11 x: nxfcxbjqxdlcxxxkxxx
14-18 v: vvbqvvvvvvvvvvvvvvvv
7-8 f: pgtlfffmjffnt
10-18 m: mnkrmmmmmqmmmmmmmjm
1-4 l: lghlhcnwprlgvw
3-4 p: npxplpwl
12-15 s: sfkwnvsssvssssfsssrp
3-7 z: ztqnzlxjmzzbjfnxcw
17-18 q: qqqqqqqqqqqqqqqqqq
3-6 z: jczztzzbhmzzw
3-7 f: skffttjffqfnchfrf
4-6 m: hmqmcrmw
10-11 t: dftttqttttttl
7-13 p: spxnpgtzpppjpwppptp
8-9 q: jqxqqqqxqq
3-4 h: hhhh
10-13 z: pgzxhxxpzzssj
5-9 x: xfrdmjxmrxrqjpxbfxxx
8-17 d: ddpddddddddsgddzddn
1-4 g: vggdggggggggggggggg
10-12 m: mmdqsmwvjjmv
2-7 s: ssqsssk
13-14 n: nnvnnnnnnnnnsgnn
2-16 k: kkkkkkkkkkknkkkk
3-6 p: dprphc
2-10 k: mpkstkxkdb
2-3 s: ssxs
9-19 t: ttjttjttrtsqtmttttt
4-5 j: jrjjtsjjd
6-7 x: xxxpxjx
13-15 q: fqfqqqqhqcqfqqbqqq
1-3 z: zfgrzl
6-8 n: nnnnnphm
1-8 b: bbbbbbbbb
4-5 h: thhgj
4-8 v: vvvcvvvp
8-9 t: ktttttttt
3-4 f: wftbcfnmhkfdpjbns
6-7 v: vvvvvlv
16-17 z: zzzzhfzzzzzzkzzzwzzz
1-2 q: qqqfq
10-11 p: zpjzcppvcppppppppj
10-15 c: vlccbcgcclcczfcfcc
11-17 t: tsntktwzhsfttfwtx
1-7 h: nhhhhhb
6-13 b: bbbphnbbwbbbb
8-9 x: xgxxxlxfxx
14-16 m: mmmmmmmmmmmmmmmm
3-4 x: xxbxx
6-9 c: xkccsfccrccv
10-18 h: jphhbshwghrxpnhnlhxh
6-10 f: nlxbgvftfh
3-4 p: ppwf
1-6 s: kjwjwshcnqwxgwslvl
2-3 m: mmlk
2-3 g: gmgg
3-6 r: rrrvrmr
1-6 s: szgpksczqd
12-14 t: ttttttpjvtqwtltt
1-2 r: hrrrrvrrzj
1-13 m: xmmmmmsmmmcsnmmmmfmm
10-11 f: fffffffffsf
13-15 d: ddddddddddddhdq
7-14 k: jkkkkkkkrkmkkkk
6-9 g: ggggggggg
14-16 l: lllllllvlllllwtx
1-3 g: ggggt
3-4 m: mmkd
5-10 g: jgsgvggwggj
17-18 p: ppppppppppppppphpp
1-2 q: qqjwhq
2-6 q: qqgqqzk
11-16 t: ttwttttttctttthgt
1-5 m: zmmmsm
12-16 r: rrrrrrrrrqrgrrrj
4-5 v: xcvvghvrczpcgn
1-3 x: xbfmxxfxxf
3-5 j: hjbjm
5-14 l: lllltlllllqllll
3-4 x: xsxnxgtx
6-18 g: gggggggggggggggggd
8-12 t: tgttttqtcttttt
4-6 p: pppppd
6-7 x: xxxxxxx
3-4 c: fdcclrccccvg
11-12 v: vnvvvvzdvcrk
1-9 z: zztzqzzzzcz
1-12 v: vmvvvvvvvvvmvvvv
9-16 v: vvvvvvvvvvvvvvvf
2-7 h: xhtsfmvthhhrhdhhbbc
5-6 c: qkccccd
8-12 z: zzzzzzzjzzhbzz
2-4 n: shlnnkxn
19-20 v: vvvvvvvvvvvvvvvvvvcv
7-8 h: hhkhhhkhh
5-19 p: sxslgwvkszswqxtqpvf
5-8 m: mmmmmrmbm
2-5 j: jrnjjzjfhjdkjqjtkwk
7-13 f: ffffffsfffffwfff
6-9 w: wmwwdwwwsz
12-15 f: nsffpfsdsjsfsffk
13-16 k: kkkkkkkkkkkkkkhw
6-17 s: ssssslssssssssssss
3-5 c: srdscnncclqqcncsw
9-11 p: pkppppppppp
5-10 q: qqqqqqqqqpqq
12-14 n: nnnnnnnnnnnnnn
6-11 h: hhhhhqhhhhhvhhhh
2-12 f: fgfrpzcstfffffxff
2-12 n: nnxmnmnnnnknrpmnv
6-7 m: jmmmmcnpkm
4-6 v: mvkcwvmvvjvrvlv
18-20 h: hhrmbrhhhhlhhvhmhhhb
9-13 g: ggggggzgggsgfgxg
9-15 m: pmmxmmmmmmmmmmm
1-7 l: zlmsmlxpvvlzv
2-15 g: sslggkdglqgxpgkx
17-18 c: ccccccccccccccccmc
10-11 w: wwwwwpcwwwpwwd
3-5 w: wwwwk
8-9 f: vfbvffsfcf
4-6 r: rrrrrr
2-4 n: nrnknn
1-4 l: lxllllll
10-11 f: qdfwvfffdfvwffgfkfgf
3-4 b: xgxbdqxbfvzrl
2-8 b: pbbkbbgbxr
1-2 d: ddxdnv
4-8 d: dndfcnhd`;

const inStr8 = `jmp +254
jmp +1
acc +48
jmp +487
jmp +586
acc -18
jmp +238
acc +37
acc -7
acc +45
jmp +514
jmp +25
acc -2
acc +48
jmp +43
acc +33
acc -1
jmp +98
acc +0
nop +406
acc +32
acc +34
jmp -15
jmp -5
acc +0
nop +60
nop +395
jmp -15
jmp +380
acc -15
jmp +446
acc +38
acc +18
acc -1
acc +23
jmp +386
nop +534
acc +19
acc -6
acc +41
jmp +163
acc +17
jmp +383
acc -13
jmp +346
acc +10
acc -18
nop +448
acc +50
jmp +399
acc +43
acc +36
jmp +24
acc -7
acc +43
nop +60
jmp +80
nop +40
nop +274
acc -16
acc +42
jmp +102
acc +17
jmp +410
acc -8
acc +45
acc +12
acc +50
jmp +486
acc +17
jmp +425
acc +39
jmp +239
acc +7
acc +3
jmp +315
acc +13
jmp +344
jmp +154
acc +20
acc +3
jmp +206
acc -14
acc +33
jmp +79
acc +44
jmp +106
acc +5
jmp +1
acc -19
acc +19
jmp +346
acc +41
acc +42
jmp +481
acc -4
jmp +142
acc +10
acc -5
acc +44
nop +302
jmp +368
nop +36
acc +46
acc +44
nop +171
jmp +256
acc +37
nop -11
acc +7
nop -34
jmp -68
acc +16
acc -4
jmp +355
acc +1
acc +45
acc -19
jmp +464
acc +33
jmp +149
jmp +475
nop -86
acc -7
acc -12
acc +38
jmp +398
acc +8
acc +16
acc +25
jmp +350
acc +18
acc +42
acc +12
acc +43
jmp +302
jmp +331
jmp +14
acc -18
acc +18
acc +7
jmp +140
acc +8
jmp +42
acc +10
acc +4
acc +28
acc +20
jmp +75
acc -8
jmp +30
acc +13
jmp +28
acc -6
jmp -142
acc +17
jmp -41
jmp +361
acc +37
jmp +147
nop +78
jmp +1
jmp -18
acc +1
nop +273
acc +43
acc +30
jmp +126
acc +4
acc +10
acc +9
jmp -128
acc -12
acc -3
jmp +58
acc +17
acc +38
acc +42
acc -10
jmp +218
acc -18
jmp +378
acc -11
acc +6
jmp -33
acc -15
jmp +68
acc -11
nop +312
acc +21
acc +33
jmp -36
jmp +281
acc +34
acc +3
nop -40
acc -5
jmp +141
acc +6
acc -5
jmp +99
acc -9
jmp +360
acc -9
jmp +366
acc -1
nop -188
acc +47
nop -87
jmp +361
jmp -113
acc +43
acc +21
nop +41
acc +1
jmp -23
acc +10
nop -110
acc -16
jmp +136
acc +33
nop +219
jmp -95
jmp +223
acc -6
jmp +354
acc +24
acc +50
acc +10
acc +26
jmp +207
jmp -202
jmp -6
nop +181
acc -9
nop +248
acc +43
jmp +325
acc +2
acc +19
acc +22
jmp +254
acc +31
jmp +233
acc -9
acc +24
acc +49
acc +18
jmp +84
acc -19
acc +16
acc +37
acc +31
jmp +66
acc +6
jmp +1
jmp +206
jmp +126
acc +24
jmp +271
acc +16
jmp +1
acc -11
acc -4
nop +47
jmp +118
nop +136
acc +7
jmp +94
acc +0
acc +0
jmp +239
acc -4
acc +23
acc +16
jmp +270
acc +28
jmp -8
acc +24
acc -13
jmp +117
acc +31
acc -3
acc +21
acc -9
jmp +86
jmp +293
nop -29
acc -11
jmp -162
acc +36
acc -4
jmp +122
acc -13
acc -10
jmp -115
acc +23
acc +7
jmp -126
acc +21
jmp -162
acc +48
acc +43
acc +37
nop -275
jmp -89
nop +248
jmp +107
acc +26
acc -16
jmp +185
acc +40
acc +32
jmp +232
acc +27
jmp +189
nop +259
jmp +131
jmp +261
jmp +230
acc -2
acc +37
jmp +240
nop +1
acc -9
acc +36
jmp -110
acc +5
acc +50
acc +23
acc -19
jmp +142
acc +40
acc -4
acc +3
nop +134
jmp -164
jmp +60
acc +28
acc +28
acc +24
acc -7
jmp +91
acc +1
jmp -268
acc +41
jmp -195
acc -3
jmp +231
acc +48
acc +7
jmp -153
acc +2
acc -11
jmp +60
nop -240
nop -40
jmp -125
acc -7
acc +14
acc +23
jmp -103
jmp +1
acc +27
acc +16
acc -17
jmp -181
acc +38
acc -6
acc +20
jmp -243
acc +13
acc +26
acc +5
acc +38
jmp -268
acc -17
jmp -373
acc -10
acc -10
nop +68
jmp -36
jmp -128
acc -5
acc -9
acc +10
acc +15
jmp +103
acc -6
jmp +64
acc +42
acc +15
acc -12
acc -1
jmp -309
nop +187
jmp -378
jmp -78
jmp +1
acc +7
acc +0
jmp -389
acc -14
jmp -80
acc -13
acc +0
acc +25
jmp -364
acc -9
acc -13
acc +11
jmp +1
jmp -327
jmp +63
acc +0
nop -300
acc +29
jmp -101
nop -238
acc +25
jmp -204
jmp -13
acc +21
acc +43
jmp -137
acc +44
acc +11
acc -18
jmp -307
acc -16
acc +0
acc -7
jmp +138
acc +11
acc +42
jmp -411
jmp -34
acc +9
jmp -89
jmp +115
jmp -62
acc -5
acc +37
acc +14
acc +16
jmp +45
jmp +37
jmp -404
jmp -356
acc -4
acc +18
acc -18
jmp -97
nop +57
acc -5
nop -93
acc +47
jmp -247
acc +4
acc -13
nop -309
jmp -245
acc +9
acc -12
acc +49
jmp -302
jmp +88
jmp -438
jmp -397
acc -9
nop -278
jmp -313
jmp +90
jmp -329
acc +36
jmp -411
acc +3
acc +36
jmp -454
jmp -343
nop -148
jmp -237
jmp -159
acc +6
acc -17
jmp -481
acc +30
acc -12
acc +40
jmp -27
acc -19
acc +30
jmp -39
acc -17
jmp -32
acc +23
jmp -432
acc -18
nop -427
jmp +19
acc -6
nop +81
jmp +16
jmp -23
nop +45
acc +44
nop -33
acc +23
jmp -111
jmp -271
acc +3
acc +0
acc +5
acc -4
jmp +48
acc +0
nop -300
jmp -402
acc +18
acc +3
acc +30
jmp -263
nop -125
jmp +59
jmp -488
nop -518
acc +3
acc -11
acc +3
jmp -522
acc +13
jmp +9
acc +35
acc +22
jmp -276
jmp +1
acc -5
jmp -458
acc -10
jmp -388
nop -100
jmp -6
acc -6
nop -289
jmp -91
acc +31
acc +37
jmp -43
jmp -237
jmp -49
acc +22
acc +13
nop -79
jmp -105
jmp +1
acc -8
jmp -166
nop -27
jmp -23
acc -17
jmp -298
jmp -274
acc +5
acc +11
jmp -372
acc +29
nop -204
acc -14
acc +38
jmp -493
acc +15
jmp -146
acc -6
acc +49
jmp -371
jmp -504
acc +17
nop -367
jmp -279
acc +9
jmp -50
jmp -327
acc +18
acc +39
acc +19
acc +10
jmp -7
nop -87
acc +15
jmp -565
jmp -252
acc -19
acc +17
acc +25
nop -350
jmp -296
acc +39
nop -579
acc +23
acc +43
jmp +1`;

const inStr9 = `26
36
37
9
8
22
41
5
17
44
40
31
10
33
30
50
24
4
12
46
39
45
42
7
27
13
58
11
14
53
9
15
23
18
16
21
17
49
19
20
32
31
22
30
24
35
28
33
25
47
57
26
27
29
83
34
37
36
59
46
39
51
44
54
56
48
49
100
62
50
52
72
53
55
60
96
61
91
65
70
85
87
88
114
83
113
92
93
97
104
142
99
102
103
153
105
108
115
116
148
144
152
177
135
167
171
201
256
182
176
252
185
190
196
203
202
348
240
208
292
213
300
323
301
315
367
302
502
393
357
353
358
390
760
361
375
492
710
398
405
448
509
421
594
505
566
810
690
603
924
655
1317
711
823
714
1171
719
736
759
1080
773
803
819
953
1528
869
1195
1522
1071
1509
1169
2270
1314
1514
1369
1366
1425
1430
2620
2125
1455
1830
1495
1532
4045
1576
1622
2397
1822
2501
3331
2240
2385
2664
2942
2483
2680
2683
6285
2791
2796
2855
2987
4522
2950
3108
3198
3317
4207
3398
3816
5031
4809
4062
4868
4625
5667
5049
5338
5163
5587
5363
7318
6506
5646
5651
7405
5937
7214
9874
6306
10612
7379
11586
9708
9179
15648
8871
8687
16263
9674
10212
10387
15046
15901
19548
11009
31549
40236
11297
18965
13151
17087
19920
16014
22320
17766
16558
17558
30262
17866
18361
19083
19984
19886
33617
39878
21396
26343
22306
24448
24160
27311
27855
63879
29165
35097
32572
47775
33572
34324
40072
57630
35919
53325
36227
37444
38969
44046
41282
45844
43702
45556
58020
46466
48608
51471
55166
94135
80653
70016
66144
70243
80251
83910
76413
72146
73363
77509
88915
73671
103576
99302
84984
188560
89258
181085
92022
95074
97937
136160
158162
128529
136387
143379
138290
168180
142389
157273
145509
149776
147034
169531
158655
162586
162929
191324
281669
174242
258003
187195
187096
189959
193011
226466
264689
264916
266819
274677
389395
301044
287898
320202
292543
308095
342787
309620
480909
321584
325515
438931
374291
361338
361437
532680
377055
419477
382970
607476
491155
684166
531735
541496
635135
602163
1216846
580441
600638
744992
617715
631204
1022890
647099
686952
686853
722775
735629
738393
738492
1271073
1903798
1067136
874125
1032651
1149450
1073231
1353344
1121937
1181079
1613092
1231842
1198156
1750088
1248919
1264814
1278303
1333952
2436941
2590651
1805529
1458404
2222681
2936449
1941261
1906776
1947356
2105882
2980007
2872025
2195168
2455889
2320093
2303016
2379235
2429998
2447075
2707323
2513733
2736707
2543117
3263933
5086558
3365180
4136429
3399665
3405760
4053238
4863210
3848037
3854132
4485117
4758905
4498184
4515261
4574403
4816749
4623109
4682251
4826310
5807050
4960808
5056850
5250440
8422030
5908297
6629113
6764845
7219312
9361394
7897849
7253797
8422440
8717342
9932691
8339249
9138370
12962358
10489301
13383248
9631253
9439858
9305360
16126239
9787118
10017658
10211248
16392167
14611834
13393958
17152003
15104094
16615191
14473109
15151646
15593046
19950349
17056591
18936613
25032904
17477619
18443730
19071111
27108872
19226976
18745218
31230333
19516608
19804776
36342516
20228906
23605206
27867067
31668425
31837688
36844097
35101995
43969517
29624755
36704595
32649637
35500321
34534210
36414232
35921349
38298087
37188948
68010941
38974124
62714735
38261826
39321384
39745514
64726750
43834112
48095973
60309801
130725676
61293180
67183847
66329350
62274392
87841487
110163462
99283925
72689269
70034531
70455559
75388356
73110297
75450774
76163072
77235950
149484846
77583210
78007340
79066898
132308923
127001142
114425323
131748739
133982449
123567572
134403477
128603742
132729951
137662748
140490090
104054607
145799566
148038769
232658349
143565856
148498653
200111439
179505381
153399022
154819160
155590550
202634470
157074238
213470375
218479930
248407772
238458084
310409710
272066225
227622179
252093376
289365422
286161401
258873767
396446541
247620463
439560423
291604625
430256649
406912536
382441339
308218182
395532322
402439623
311893398
466080263
359708708
370544613
446102109
648736579
479715555
499688404
475242642
530939992
575526823
545035168
506494230
577766026
539225088
986209785
555838645
599822807
603498023
620111580
671602106
667926890
990656193
861612585
730253321
682438011
805810817
834951350
925817664
921344751
954958197
1133604671
1006182634
1014467730
1062332875
1432311894
1045719318
1868143692
1223609603
1095063733
1609680657
1155661452
1203320830
1271424913
1545929244
1339528996
1488248828
1608255675
1731628481
1565204671
1744770886
1939415488
1756296101
1932000298
2179323989
2000677515
3476399367
2571387305
2250725185
2108052193
2317144231
2904733667
2298384563
4230384861
3695711589
4503387603
6248158489
2474745743
3003053394
2827777824
2947784671
3935620090
5936297605
3296833152
4040052491
3501066987
3688296399
5155458852
4406436756
5007101813
4549109748
4358777378
5078503009
4425196424
4582797936
4615528794
6163042142
6234004653
5302523567
5422530414
5477799137
5975812730
5771578895
5830831218
6124610976
11398343144
17522954120
6797900139
6985129551
8990819966
9971640162
8113492823
8765214134
8783973802
8907887126
8941575314
10591341524
9040725218
9007994360
10558610666
9918052361
10725053981
14889825110
14838825578
10900329551
16956769713
11602410113
13783029690
11955442194
20739415996
16769540301
15750343685
14911392962
15769103353
16878706957
16897466625
17805939352
17549187936
23897819470
18048719578
17949569674
18926046721
18958777579
19566605026
20476663027
25811722513
38736645048
22502739664
22855771745
27797796176
23557852307
25385439803
26866835156
27705785879
55615352005
42422376771
30661736647
30680496315
32647810310
33776173582
34847036299
35755509026
43360910449
45825612735
45747365850
63775182409
38492651747
38525382605
42069344690
64925116435
45358511409
46060591971
46413624052
80205547708
48943292110
64456669897
52252274959
54572621035
66198437626
61342232962
63309546957
63328306625
65527532614
81853562196
68623209881
104020184361
129148839818
80561996437
77018034352
84272748455
80594727295
83851163156
110870293949
131951516506
91419103380
91772135461
95003884081
131590655387
143871543394
103515913145
119029290932
106824895994
145991724415
124651779919
126869765576
126637853582
172139123026
134150742495
145641244233
149185206318
157580030789
157612761647
164445890451
168123911611
164867475750
172013830675
291083744033
256010102312
183191238841
186422987461
186776019542
295176930733
210340809139
222545204077
225854186926
231476675913
233462749576
251289633501
291505329332
275823059900
291730773284
325736673258
303221275022
344356050331
523207449197
329626592322
322058652098
329313366201
332991387361
336881306425
355205069516
774497082698
1000351269624
617242002590
373199007003
397116828681
448399391003
432886013216
454021879990
457330862839
509285809476
484752383077
613789425382
567328389232
567553833184
594952048306
625279927120
632534641223
1096555734796
1373550276627
994038192553
776080532088
662304753562
669872693786
1454373149614
770315835684
1110704144565
806085020219
821598398006
827220886993
830002841897
1199863030455
942083245916
911352742829
966616672315
1052080772309
1454133039229
1276094178944
1134882222416
1389152231190
1804754916202
1619318119673
1763681643922
2203553118524
1440188529470
1492307595459
1332177447348
1483903151568
2300504974019
2141946276371
2946440634688
2216373118183
1627683418225
2449320961570
2251943802764
1741355584726
1853435988745
1877969415144
2046234965245
2018697444624
3193907147392
2410976401360
2772365976818
2524034453606
2721329678538
2816080598916
4834778043540
3119991013684
2824485042807
2924091681038
2959860865573
3185613436093
3625849427939
3594791573471
4235070562807
4574124052913
4495555926815
3369039002951
3731405403889
3993299387490
3760053029350
4264412390105
6906532328175
4064932409869
4429673845984
4935010854966
6149883881545
5245364132144
5340115052522
5645421359576
6010098478900
5748576723845
5784345908380
5883952546611
7681169362908
6145474301666
11402088254990
6963830576422
7354844602821
7362338390441
8329344799974
7100444406840
7129092032301
7491458433239
7753352416840
7824985439219
10890785491720
13429746086753
8494606255853
10683587578811
10180374987110
10585479184666
11393998083421
11088691776367
11429767267956
18558859300257
11532922632225
13826643664574
12984396953451
13245918708506
15595050662693
14064274983262
14491430422742
21575263508480
14853796823680
35401907173054
53960766473311
33005030776436
15244810850079
15578337856059
18674981242963
19080085440519
54580294284916
19178193834664
20765854171776
21674170961033
26333502626446
22926920715646
22518459044323
27008105124015
28318074087316
27737349131248
32501624907537
26230315661957
37009889467065
28555705406004
28918071806942
70158632140975
45413588066965
30098607673759
30823148706138
62600232581296
41475126512036
33919792093042
34253319099022
61261424223037
38258279275183
57180239814668
39944048006440
44192630005356
44601091676679
45445379759969
52617066718082
48748774706280
64351926772781
53967664793205
56655420938190
73519163483621
109765514839746
57473777212946
85667756517392
59016679480701
60921756379897
97274958755884
126952159354077
64742940799180
72511598374205
92561114724522
68173111192064`;

var getDay1Input = () => {
    return inStr1.split('\n').map(s => parseInt(s));
}

var getDay2Input = () => {
    let inputs = {"passowrds":[], "policy":[]};
    inStr2.split('\n').forEach(s => {
        const parts = s.split(':');
        inputs.passowrds.push(parts[1].trim());
        inputs.policy.push(parts[0].split(' '));
    });
    return inputs;
}

var getDay8Input = () => {
    let inputs = {"cmds":[], "params":[]};
    inStr8.split('\n').forEach(s => {
        const parts = s.split(' ');
        inputs.cmds.push(parts[0]);
        inputs.params.push(parseInt(parts[1]));
    });

    return inputs;
}

var getDay9Input = () => {
    return inStr9.split('\n').map(s => parseInt(s));
}

// console.log(getDay3Input());

exports.getDat1Input = getDay1Input;
exports.getDat2Input = getDay2Input;
exports.getDat8Input = getDay8Input;
exports.getDat9Input = getDay9Input;