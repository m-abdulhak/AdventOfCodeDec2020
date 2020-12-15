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

const inStr3 = `..#.#...#.#.#.##.....###.#....#
...........##.#...#.#..........
....#.....#..#.............#...
.#....###..##...#...##...#.#..#
#.......#.........#..#.......#.
...#.##..##...#.#......#.##.#..
#.#..##.....#.....#..##........
...#.####...#.##...#...........
.#...#..#..#....#.#.#.#.##.....
##.#..#.##..#......#..##.#.#..#
.#.##.....#.#...............#.#
..##.#.....#.....##..##.#....#.
#..#..........#...##........#..
#..##.#.#...............#..#...
..#....#...#.......#.......#...
.........#.#.##.#........#.....
#...##....#..#.........#.#...##
...#.#...#...........#..#...#..
...#..#........#...#...........
.#....##.#...#.#....#....##....
...#...#......#.#.......#...##.
####..........##....#..........
#..#...........................
#....#...####..##.#......#.#...
..#..#.....##.....#...#....#..#
#.##......#..##........#.......
..........#.....#...#.#.#....##
....##...##..#........#...#..#.
#..#..#...##..............##...
###.##..##.###...#....##.#..#..
.#......#.................#.#..
#.#..#.##.#.#.#.....#.........#
..##......#.......##........#..
#..............#.##.#.....#....
............................##.
..#.##......#..........#....#..
..##.....#..##.#....#.......##.
..#.#.##.#.........#...........
...........##.#.#...#......###.
#....#...#........#.#...#.#.###
..............#...#.....##....#
#...#...#..............#..#...#
.##..#.........#.##.#..#...##..
.....#.........#..#..#.......#.
.#......#.#.#....##..#...#..##.
#....................#.#....#..
......#.....##............#....
.#.....#......####.....#....##.
##.####.#..#..........#......#.
##....................#..##....
.....#...#.#.##.#.###.....#....
.#..#...####.#.#...#.#.....#...
#.....##.........##.##.##.....#
....#....##.###.........#...###
.......#........#.##.....#####.
...#.##..#...#...####.....##...
..#....#....#......#......#.#..
...#.#.#.........#.......#..#..
.....#...........#.#........##.
..##...#.#.##.#.#.#...###.#....
..##.............###....#.#....
#.......#....#..#...#..##..#...
....##..#.......####....#..#.##
##....#...#.#.#...#...#........
....#.#................#...#...
...#.....#.#.......##....#.#..#
#....##.#...#.#..#.#.........#.
#..##.........##.....#...#.....
....#.....#.#..#..##..##.##...#
#.....#...#.#.#.##....#.#.##...
.#.#........#..##.......#...#.#
..###.....#..#.##....#...#....#
...#..###...#...#.......#..#...
.#....##.......#.#..........##.
...#.#.............##.....##...
..#..#...#.....#...#...........
.#.#......#.##....#.....#......
........#.#.....#.#...#..#.#..#
#.....#.#.....#.##..#.#....#.#.
..#..###.#.#........#.....##..#
#.#....#......#.#....###..#...#
...#.#....#..#.##.....#...#....
....##....#.#...#.........#..##
.#......#...#.............#..#.
#........#........#.#.....##...
..##..#.##..#........#.........
.....#...#...#..#.....#.#.##.#.
..#..#..#.........#...#.......#
....#.....#.......#.##.#.##..##
......#.......##...#......#....
....#....##.......###.#......#.
.....#..#.#........#....#.....#
#...#...#....#...###........#..
#...........####.......#.#..#.#
..###....#..........#...#.###..
....#.#.....#....#..#.....#.##.
...##.#..#..#.......#......#.#.
....#......###..#.....#.....#..
.....#.#.#.....#.##.#....####..
.##....#.....#.#....##..#......
#..#.....#..#...#....#.#.......
.##.#..####..#.##.#......#.....
......#....#.......##.##....#..
...#....#....#..##.......##.###
..##..........##.............#.
.#...#.#...##..##.....#..#.....
....#.#.##...................#.
.......#.#..#....#.....#.......
.#.#..#....####...#.#.##....#..
.#.##...#..#..#...#.#.......#..
##.#.....##.........#.......#..
.##...#.....#.........##.#....#
.............#..#............##
...##.......#.....#.......#.##.
##..##.........................
.##.#........#........#........
.....#................#.#......
.............#....#....##....#.
#..##...##...#..#.#............
.......#...####.#..#..#.....##.
..#.#..#......#.....#.#.#.....#
...#..##........#..#.#....#.#..
.#.....#..###..#....#.##.#...#.
#.#..#.##.#..#......#.###...#..
##..#.#..###....##.#...#...##.#
##..#.........#...##......#....
#.#...#.#..#..........#.......#
.......#.#.......#.....##..#...
........#..##............##.#..
........##.....#........#..#...
#..##.#..###......##...........
..#.....#.#.#....#...#.#..#..##
#...............#.......#.#.##.
#..#.....#....#............#.#.
...#....#...#....#..#..###.....
..#....#.#.....#..#......##.#.#
.#.#....#..#...#....#........#.
..##....##....#.....#.#........
.#...#....##..##.....##.....##.
.#...........#....##...##.#....
...#.....#......###.##.#.......
......#.#..##.#.#....#...#...##
....#...###.##....#.#.....#....
.......#.....#......#.....##..#
.####.#...##..#....#...........
................###...#....#..#
...#...#.....###.#.##.......#..
..#....#...##...#.###......#.#.
#...#......#............#.....#
#.........#...............#..#.
...#.##.....#............#.....
........#......##..#..#..#.#..#
....#....#.....#.#.....##..#...
.....#....#..##.....#..........
.##....#..#...........##.......
#......##.....#...#.....#......
...#.....#......#.#....#.......
...#................##...#..#..
........#..........#....#......
......#....#.#.#...........#.#.
.#............#....##.......##.
#.......#.....#...##.#..##.....
.#.....#.##..#..#....#.#..#.#.#
....#...............###........
#####...........#..#.......#..#
...#.......#...#.#............#
#...#..#.#...#.#...#.##.....##.
.#..#..#..#.....#....#...#.....
.#...#......#.......#.........#
.#....#.....#...#...#..#....#..
#....#....#.......#.....##.....
.#...#.#.##.#....#..##........#
..##...#............#..........
..........#..#..#...#....#.....
..#.......#....#.....##..##....
.#...#......#...#..###...#...#.
..##...#......#...#.#.#...#....
.....#..#.#.#.#.#...#....##..#.
##..#..##....#.#........##.#...
.##..#.#...##..#....#..#.......
.....#...#...#..#.#..#......#..
.#.....##.##..#....####..#....#
......##.................#....#
....##.......###...#.##...##.#.
...#...#.................##.#..
.#.....##...#...#.....#.....##.
##.........####..#...#...#....#
...##.....#......#.###..#......
.....###..##.#.......###..##...
#....#...#.#...#...#.#....#..#.
#...#.........##.#.........###.
#....#..###..........##........
.###.....#.#.....#........##..#
....#.........##..#..#.#.#..#..
..#......#...........#..##...#.
...#.#..#..#...#.##..#..#.....#
.#...#...#....................#
..#..##..#.............#.....#.
.....###.#.#.#...##..#.##....#.
..#...####..##.#....#...#...#..
.....#..#........#.#.#..#.##...
#.#.........####..#...#.#......
..............#..#........#....
....#........#......#.........#
#..#.##......#.#.......#....#..
....#..............#.#.#..#....
#.#......#.....##.......#..##..
.#.#..........#....#......#....
.....#.......#.##.....#......##
...#...#.##.............####...
..#....##...#...##..#.#..##.#..
..#.........##.......###.#.....
..#.........#####..##...#......
..#.#...#.......#.####......##.
......#.#.#....#......####....#
.###...........#...#..#..#..##.
..#...#..##.##...#.#.##.....#..
.....#..#....##.......#...#....
......#.....#.........#..#..#..
...#..#.........##.....##.#...#
....##...#......#..#.....#.....
....#..#....#....#........##...
##.....#.......#.....#.#.#..#..
.....#..##.....##.##.#.........
.#.#..##.............#.#.......
......#.##.#.....#.#......#..#.
..........#.#..#....#.#.#.#..##
...##.....#..#...#...#...##....
........#.#......#..###..#.....
..#.##......#.......#.......#..
...#....##.##.........#.#......
......#....#.#.........#......#
.....#...#....#...#......#..#..
.##...#......#.........#...#.#.
..#.#.#......#....#............
..#.....##.............#.##.##.
#......#......#...##.......#.#.
##........#.....#..............
.#.###.................#.#....#
........##.#..##........#.#....
.......###...#...##.#..#....#..
.#..#....#..#......##......#...
.#...#....#..........##..##.#..
.#..###.......#............#...
...#.....###.#..#........#.#.#.
...#....#..#.##..........#.#.#.
.#..##..#.....#...........#....
#...#...##....#..#....##.......
#..#......#................#...
#..##....#.#..#......#.#.#.....
##.#..#...#.....#.#...#......##
#....#.#.#....#.....##.....##..
....#...##.#...####.#.#.#.#..#.
.....#.#....#..#.....#..#......
.........#.#...................
........#.....####......#..#..#
.#.#.##.#...#.#......#...##.##.
.#......#.#.#...#..#.......#...
..#......#.##.##.#.#....#......
..........#.#...###............
.##..#..#.#.#..#.....#..#.#....
......#.......#.#..#.#....#...#
.#.......###......#...#.#.#....
.............##..#..#...#....#.
....#......#.#...#.#...#...#...
..#....#.......#.#..#..#.#..#.#
.#..#.#...#.....#.#...#####...#
.##............#....#..........
#.......####...#.#.#...........
...#.......##.#..........#....#
..#.#......#.......##.....#..##
#......#.###..#......#......#.#
##....#..#....#.##....#..#.....
...##...#.#....#.#.......#.....
#...####....#..#.#..#.##....###
.....#..#..........###..#......
.#..#..#...#....#.##..#..#.....
#..#.....#....#..#.##...##.....
.....###.#..#.......#...###.##.
#..#........#.#..#.#.........#.
....##........................#
.#....#.#.#.#.#...#......#....#
#....#...#.##.......#.#.###....
..........###..##....#..##.#...
...##..###...#.#.#.......##...#
##.#...#..#.....###....#.......
..#..##....###........##....###
.....##..#...#..#.....#..#....#
#................#....#...#..##
#....#.#....#..###.#.#...#..#.#
........##.#...#.#.#.#...#.....
..#..###....#......##.#...##...
..#..##....#.##..#.....#.....#.
.#.#...#.....#..#..#......##.#.
........#.#...#..##....#..#....
...##...#...#...#...##...##..#.
.......#..#..#....#.#..#...##..
.#.....#.##........#...#.#.....
##.#..#....#.#....#.#....#...#.
..#.#......#.......##...#....#.
#.#..####..#........#.......###
....#.......#.......##.#...#.#.
..#..#.#.............#..#......
........###.....##....#.......#
...#.....#...#...#....#.###....
#...##.#........#..#...##..#..#
...##..#....#....#.#.#...#.#...
#......#.....#....###......##..
.....#.........####...##..#....
.......#...##...#..#..#.#......
.#.#....#.....#.......#........
...##...#....##..#.....###.....
.#....#........##......#....#.#
.........#.#.#.#...........#.#.
....#.#..##......#.#.#..##.....
.........#.....##....#.........
....#.............#...........#
...#..##........#.....###......
#....#....#......#..#..#..#.#..
#......##.....#..#....#..#.#...
#..............#....#.#....###.
..##..#..#...#...##........##..
..#.##....#..#......###..#.....`;

const inStr4 = `eyr:2024 pid:662406624 hcl:#cfa07d byr:1947 iyr:2015 ecl:amb hgt:150cm

iyr:2013 byr:1997 hgt:182cm hcl:#ceb3a1
eyr:2027
ecl:gry cid:102 pid:018128535

hgt:61in iyr:2014 pid:916315544 hcl:#733820 ecl:oth

hcl:#a97842
eyr:2026 byr:1980 ecl:grn pid:726519569 hgt:184cm cid:132 iyr:2011

ecl:grn hcl:#6b5442 pid:619743219 cid:69 hgt:176cm eyr:2027 iyr:2012
byr:1980

ecl:brn byr:1969 iyr:2014
hgt:164cm eyr:2020 pid:982796633 hcl:#602927

ecl:gmt
iyr:1987 eyr:2039 pid:15115163 byr:2006
hcl:bfab0d

cid:117
hcl:#efcc98
iyr:2010 pid:322719183
hgt:176cm
eyr:2020
byr:1957
ecl:brn

byr:1954 hgt:178cm hcl:#38f7fd pid:838813262 ecl:blu
eyr:2029 iyr:2019

eyr:2023 ecl:amb iyr:2020 byr:1927 pid:242570886 hcl:#18171d hgt:192cm

iyr:1990 cid:295 hgt:131 pid:187cm byr:2014
ecl:xry hcl:z
eyr:1928

ecl:hzl
byr:1953
eyr:2023 hcl:#866857
hgt:181cm iyr:2010 pid:568185567

byr:2030 hcl:#fffffd ecl:#a4a596 hgt:168cm
iyr:1936 eyr:2020 cid:296 pid:168786676

byr:2030 iyr:2026 eyr:1974 hcl:7fcaa5 ecl:utc
pid:190cm
hgt:67cm

byr:2023 eyr:2037 hgt:59cm
ecl:lzr hcl:z iyr:2026 pid:#ea9083

byr:2003 hcl:z hgt:91 iyr:1990 eyr:2024 ecl:#123d73
pid:48494230

byr:2022 eyr:2020 iyr:2030 ecl:gmt
hgt:191cm pid:3509331253 hcl:#888785

iyr:1994
ecl:#c3d564 byr:2009
hgt:162cm hcl:336498 pid:#e99d09
cid:288
eyr:1921

byr:1924 cid:290 iyr:2010 ecl:amb eyr:2020
hgt:156cm hcl:#7d3b0c pid:795497164

cid:301 iyr:2017 hgt:67cm
hcl:#888785 ecl:#0405b9 byr:1964 pid:707857518 eyr:1976

ecl:gry pid:474303066
iyr:2011 hcl:#18171d hgt:165cm byr:1921 eyr:2024

hcl:#6b5442 ecl:amb iyr:2020 hgt:191cm
byr:1949 cid:301
pid:075846582 eyr:2029

hcl:#a97842 cid:186 iyr:2014
ecl:gry
hgt:191cm eyr:2023 pid:645548969
byr:1956

pid:154cm hcl:z ecl:gmt iyr:1989 hgt:69in cid:53 byr:2010

hgt:72cm byr:2023
eyr:2034 hcl:z ecl:#f5249e iyr:1997 pid:#79af7a

eyr:2038 byr:2015
hgt:70cm ecl:grt hcl:9d58a1 iyr:1926 pid:6290928420

pid:620857794 eyr:2022
byr:1950
hgt:159cm
hcl:#ceb3a1 ecl:amb iyr:2015

eyr:1954 ecl:#ab2ce4 pid:#14eedd
iyr:2009
hcl:29e484
byr:2022 hgt:73cm

hgt:59cm byr:2026 cid:245 iyr:2020
eyr:2029 pid:073943129 ecl:hzl
hcl:#b6652a

iyr:2014 byr:2015 hcl:#a97842 eyr:2029
pid:#132098
hgt:150 ecl:oth

hgt:151in ecl:#967d49 eyr:2026 hcl:#18171d
pid:384230726 byr:1934
iyr:2018

iyr:2020 eyr:2021 byr:1937 pid:735047371 cid:159 ecl:blu hgt:177cm hcl:#22b774

ecl:brn hcl:#6b5442 pid:117807698 cid:105 iyr:2016 byr:1977 hgt:183cm

ecl:hzl hcl:#6b5442 byr:1933
iyr:2019 pid:348486702
eyr:2020 hgt:193cm

byr:1928
ecl:gry
eyr:2028 hcl:#fffffd pid:571149069
iyr:2012 hgt:175cm

pid:359108298
eyr:2027 hgt:158cm ecl:amb iyr:2016
hcl:#602927

iyr:2027 byr:2015
hgt:191in pid:102033301 ecl:xry
eyr:2031 hcl:#602927

ecl:oth cid:163 hcl:z iyr:2014
byr:1944 hgt:173cm
eyr:2027 pid:#0524c1

ecl:brn
byr:2030 hgt:71cm eyr:1931 cid:165 iyr:2010 hcl:#cfa07d
pid:509642098

hgt:166 iyr:2020 cid:308
eyr:2022 pid:950463527
byr:2017
hcl:z

ecl:amb
eyr:2023 byr:1924
pid:901038027 hgt:70in
iyr:2010 hcl:z

byr:1972
iyr:2013
hcl:d669ad hgt:64cm cid:247 ecl:#19aa26 eyr:2023

hgt:71 hcl:#fffffd
byr:1976 cid:108 eyr:2038
ecl:grt iyr:2018 pid:190cm

iyr:2017
byr:1963 ecl:grn hgt:175cm
pid:160915270 eyr:2028 hcl:#cfa07d

pid:569740130 hgt:171cm hcl:#733820
ecl:gry eyr:2024 iyr:2020 byr:1973

byr:1937
iyr:2016 ecl:gry hgt:181cm pid:521705827 hcl:#b6652a eyr:2027 cid:295

hgt:156cm ecl:blu iyr:2019 hcl:#866857
pid:662418718 byr:2000 eyr:2024

byr:1971 pid:693616099
hcl:#efcc98
hgt:175cm iyr:2016 ecl:gry
eyr:2023

iyr:2013
eyr:2024
ecl:gry
pid:414295491 byr:1986
hgt:188cm hcl:#b6652a

eyr:2022 byr:1975 iyr:2020
ecl:grn cid:68 hcl:#a97842
hgt:151cm pid:229803943

cid:258 iyr:2012
ecl:hzl
byr:2001
eyr:2021
hcl:#866857 pid:990590217 hgt:172cm

cid:339 byr:1957 hcl:#866857 pid:343480061 eyr:2039
hgt:191cm
iyr:2021
ecl:utc

cid:281 hcl:z ecl:blu
byr:2020 pid:132694306 eyr:2020 iyr:1953

hcl:#602927
byr:1933 eyr:2028
hgt:165cm ecl:gry iyr:2018 pid:658484617

ecl:oth
hgt:188cm cid:110 pid:056975690 iyr:2016 byr:1950 eyr:2023 hcl:#cfa07d

cid:342 hcl:#fffffd eyr:2024
pid:153555359 byr:1974
ecl:gry hgt:191cm iyr:2020

byr:2019 ecl:#160ed3 eyr:1999 hcl:z
cid:146 pid:195693972 hgt:159cm

iyr:2015 eyr:2030 hgt:191cm byr:1979
ecl:#ec4873 pid:994113786 hcl:#cfa07d

pid:552331609
ecl:grn
hgt:171cm eyr:2022 hcl:#b6652a
iyr:2020 byr:1931

hgt:177cm iyr:2010 pid:934058099
eyr:2020
ecl:blu
byr:1967
cid:112 hcl:#7d3b0c

iyr:2028
hgt:138
cid:180 hcl:z
eyr:2022 pid:3286566621 byr:2002

eyr:2020
iyr:2019
hcl:#a97842 pid:149148750 ecl:brn hgt:159cm
byr:1981 cid:339

cid:344
eyr:2021 byr:1968 pid:777786047
ecl:grn hgt:192cm hcl:#888785
iyr:2015

hgt:173cm
eyr:2030
hcl:#733820 pid:610226642 byr:1954 cid:80
iyr:2013 ecl:blu

byr:1999 eyr:2023
ecl:amb pid:912145128
hgt:181cm
iyr:2015 hcl:#a97842

eyr:2027 hgt:188cm
pid:080715145 hcl:#341e13 iyr:2013
ecl:oth
byr:1965

hgt:170cm byr:1950 iyr:2013
pid:010541784
eyr:2027 ecl:zzz
hcl:a3bae8

hgt:190cm eyr:2024 ecl:#6dcedc pid:909319684
iyr:2011 byr:1959 hcl:z cid:182

eyr:2028
iyr:2016 hcl:#623a2f pid:208417572 byr:1929 cid:137 ecl:hzl
hgt:167cm

hcl:#6b5442
ecl:grn
byr:1938
eyr:2023 cid:307
hgt:59in iyr:2014 pid:205268145

pid:047489285 eyr:2026
hcl:#b6652a byr:1920
iyr:2015
hgt:183cm ecl:gry

ecl:blu hcl:#508e8b iyr:2016 eyr:1954 hgt:151cm pid:086752750 byr:1920

iyr:2011 byr:1981 hgt:186cm
cid:117 hcl:#6b5442 ecl:amb
pid:756830713 eyr:2026

eyr:2037 pid:364464758 hcl:z ecl:grn
hgt:112 iyr:2013 byr:2022

ecl:hzl
cid:65 pid:679487194
byr:1986 hgt:169cm hcl:#cfa07d eyr:2025 iyr:2013

cid:192
byr:1921 pid:#5fe831 ecl:#fbb2b9 hgt:62cm eyr:1971 iyr:2024
hcl:z

hcl:#cfa07d eyr:2026
hgt:74in
iyr:2019
ecl:xry
pid:622690982 byr:1982

eyr:2026 pid:523515724 iyr:2013 byr:1973 hgt:167cm
ecl:grn hcl:#866857

byr:2009
eyr:1985 pid:484497014 ecl:#0bfcf2 iyr:1992 cid:131 hcl:39d6b0 hgt:177in

eyr:2020 iyr:2016 ecl:brn hcl:#ceb3a1 byr:1966 pid:696621560 cid:62
hgt:59in

hgt:166cm hcl:#7d3b0c
iyr:2016
ecl:brn pid:190cm
eyr:2020
byr:2001

eyr:2021
iyr:2012 hcl:#6b5442
ecl:amb hgt:169cm
pid:969150085
byr:1925

ecl:brn hgt:175cm byr:1992 iyr:2016 pid:415209726 eyr:2027
cid:72 hcl:#866857

iyr:2017
hcl:#733820 byr:1938 eyr:2020 pid:274486958 hgt:163cm

hcl:4f5dd1 cid:336 ecl:grn iyr:1931 pid:6212280197
byr:2016 eyr:2037
hgt:187in

iyr:2017 byr:1940 eyr:2025 pid:115098205 hgt:151cm
ecl:grn
cid:122
hcl:#6b5442

hcl:#efcc98
iyr:2020 pid:709548547 hgt:179cm
eyr:2030 ecl:gry byr:1975

cid:217 hcl:#888785 eyr:2029
ecl:hzl iyr:2013 pid:160053490
hgt:166cm byr:1992

eyr:2024 cid:188 iyr:2016 hcl:ff3a59 ecl:xry pid:296357512 byr:2026

hgt:154cm iyr:2010
ecl:blu pid:717041634 byr:1928 cid:123
eyr:2027
hcl:#a97842

pid:391011205 ecl:hzl hgt:191cm iyr:2016 eyr:2028 cid:281 byr:1934

byr:1937 hgt:65in
pid:667975382 ecl:gry cid:270 eyr:2024
iyr:2012

hgt:179cm pid:065528723
hcl:#888785 byr:1937 eyr:2028
iyr:2013 ecl:hzl

iyr:2027 cid:261 eyr:2037 ecl:#ced7d5 pid:157cm
hcl:3a80c1 byr:2029 hgt:187in

eyr:2028
hgt:157cm hcl:#733820
iyr:2012 ecl:blu byr:1952 pid:915063263 cid:335

eyr:2023 hcl:#efcc98 pid:490625944 byr:1961 ecl:grn hgt:155cm iyr:2018

cid:247 pid:2807544665 eyr:2021
ecl:oth
hgt:191cm
byr:1928
iyr:2013 hcl:#623a2f

eyr:2015
byr:2021
hcl:40d2fc hgt:69cm pid:159cm ecl:gmt

hgt:175cm eyr:1992 cid:328 pid:263110997 ecl:#e53989 byr:2014 hcl:#a97842 iyr:2026

pid:491396731 eyr:2027 hgt:172cm hcl:#623a2f cid:92 iyr:2017 byr:1983 ecl:grn

hcl:#fffffd
iyr:2018 byr:1983 pid:714591144 ecl:grn eyr:2021
hgt:160cm

eyr:2027
hgt:63in ecl:blu byr:1987 pid:397963077 iyr:2018 hcl:#ceb3a1

eyr:2027
hgt:184cm
hcl:#6b5442 iyr:2012 byr:1984 ecl:blu pid:196287205

iyr:1998
ecl:hzl
pid:7872103596 byr:1991
cid:275 eyr:2039
hgt:174cm hcl:0d2ad6

iyr:2010 hcl:#efcc98
byr:1992 hgt:65cm eyr:2038 pid:383236012 cid:68 ecl:lzr

hgt:190in cid:127
byr:1947 pid:515728209 hcl:#733820 iyr:2014 ecl:amb eyr:2020

iyr:2017 eyr:2028
hcl:#623a2f
byr:1964 ecl:grn pid:198467794 hgt:169cm

ecl:utc
hgt:59cm byr:2007 iyr:2030
hcl:7ac4db eyr:2038 pid:#7206c6

iyr:2010
hcl:z eyr:2021 ecl:brn
hgt:173 cid:86
pid:194240791 byr:1975

pid:9347286034
hgt:63cm
iyr:1992 eyr:2034 hcl:66031b ecl:grt byr:1929

pid:593398904 byr:1939 iyr:2019 hcl:#b6652a ecl:gry eyr:2023
hgt:70cm

byr:1991
iyr:2019 hgt:164cm pid:282852411 cid:340 ecl:amb
hcl:#341e13 eyr:2027

eyr:2020
iyr:2014 ecl:grn hcl:#866857 hgt:158cm
byr:1931 pid:321748597

cid:98 byr:2023 iyr:2019 pid:#48f79f
hcl:73c882 eyr:1973 hgt:151in
ecl:utc

iyr:2023
hcl:#18171d
pid:52221892 eyr:2039
byr:2008 hgt:72cm ecl:#db8d14

iyr:1966 cid:274
eyr:2034 pid:12256322
byr:2006 ecl:dne
hcl:985c2d

hcl:#fd033b
eyr:2026 ecl:blu
iyr:2016
byr:1953 hgt:157cm
pid:502619036

byr:2015 pid:159cm iyr:2025
hgt:158cm eyr:1943 hcl:z ecl:grn

ecl:blu iyr:2016
pid:842400950
hcl:#733820
cid:266
eyr:2027 byr:1931
hgt:161cm

iyr:2017 hgt:190cm byr:1994 pid:706570967
ecl:hzl hcl:#18171d
cid:180

cid:197 pid:204952666 ecl:amb
hgt:70in iyr:2016 byr:1936 hcl:#98cbe3 eyr:2025

pid:555499128
byr:1971 hgt:71in
cid:83 ecl:blu
hcl:#cfa07d eyr:2027

ecl:hzl iyr:2014
pid:30428184 cid:237
hgt:171cm byr:1942 hcl:#888785 eyr:1986

eyr:2025
pid:579385370 hgt:193cm
hcl:#c0946f byr:1979 iyr:2016
ecl:amb cid:284

eyr:2029 byr:1946 pid:278271295
ecl:grn
hcl:#cfa07d cid:271
hgt:172cm
iyr:2020

pid:731752614 eyr:2020 byr:1983
cid:248 ecl:oth hgt:179cm
iyr:2017 hcl:#fffffd

hcl:z
cid:203 eyr:2032 ecl:#3f9d3d hgt:65cm pid:4042846885 byr:2019
iyr:1946

hgt:171cm ecl:gry eyr:2027
iyr:2013
hcl:#7d3b0c pid:92288579
byr:1955

ecl:brn hgt:164cm byr:1969 hcl:#cbf9c9 pid:022724981 eyr:2030 iyr:2013 cid:244

hgt:162cm byr:1974 iyr:2015 pid:927525094 hcl:#3d3011 ecl:blu
eyr:2023

hgt:157cm
eyr:2020
pid:221286943 hcl:#fffffd ecl:amb iyr:2018 byr:1945

iyr:2019
eyr:2025 byr:1997 pid:341544323 hgt:174cm cid:113
ecl:hzl

pid:138492032 hcl:e35302 ecl:#caaede
eyr:1931
byr:2001 hgt:156 iyr:1998

pid:912182030 cid:189 hgt:162 hcl:#277b39
iyr:2013 eyr:2023 byr:2023 ecl:blu

eyr:2027 hcl:#fffffd
ecl:brn
cid:304 iyr:2016 byr:1969
pid:866607511 hgt:192cm

hgt:64in
ecl:amb
byr:1958
pid:720439412
iyr:2015 eyr:2022 hcl:#ceb3a1

eyr:2024 hgt:159cm
pid:187867283 iyr:2016
ecl:oth hcl:#fffffd
byr:1988

ecl:#910bf2 byr:1969 iyr:2011 hcl:z eyr:2024 pid:579502502
cid:103 hgt:174cm

pid:718692455
eyr:2028
iyr:2016
hcl:#602927
ecl:blu byr:1954
cid:251 hgt:182cm

eyr:2021 hcl:#341e13 ecl:amb
byr:1933 hgt:179cm iyr:2011 pid:083172316

iyr:1998 hcl:z eyr:1944
byr:2006 pid:453368738
hgt:160 ecl:#9da5f1 cid:261

hcl:#7d3b0c
iyr:2018
hgt:164cm eyr:2020 byr:1940 ecl:blu

pid:993701676 eyr:2028 ecl:gry
byr:1951 hcl:#888785 cid:116
iyr:2020
hgt:192cm

hcl:z eyr:2033
ecl:lzr iyr:2029 cid:326 hgt:68cm byr:2026
pid:96742419

hcl:#a97842 ecl:brn
byr:1920
hgt:173cm iyr:2015
eyr:2024 pid:176967666

byr:1930 eyr:2025 pid:792694131
hgt:179cm ecl:brn
hcl:#a97842
iyr:2015

hgt:167cm byr:1960 eyr:2022 hcl:#efcc98
cid:87 ecl:blu iyr:2012
pid:431515059

hcl:#cfa07d
eyr:2023
hgt:188cm ecl:grn pid:081575957 byr:1938 iyr:2012

iyr:2010 byr:1973
cid:108
eyr:2026
pid:880191154 hcl:#888785 hgt:181cm
ecl:brn

eyr:2021 iyr:2010 byr:1942 hcl:#7d3b0c ecl:hzl pid:886241926 hgt:171cm

cid:53 byr:1993
pid:150cm eyr:2035
hcl:#888785 hgt:153cm ecl:#128262 iyr:2021

ecl:gry
pid:555911148
hcl:#733820 eyr:2022 hgt:154cm iyr:2012
byr:1935 cid:338

hcl:#b6652a
pid:833873846 iyr:2012
hgt:167cm eyr:2023 byr:1984

eyr:2024
ecl:blu byr:1955
hcl:#b6652a pid:517975316 iyr:2010 hgt:166cm

pid:133785752
ecl:blu
eyr:2024
byr:1973
iyr:2019 hcl:#fffffd
cid:236 hgt:173cm

cid:222
byr:2013 hcl:z eyr:2036 pid:7443967478 ecl:brn
iyr:2030 hgt:62cm

hgt:193cm cid:259
hcl:#18171d
ecl:grn
byr:1995 pid:727880050 eyr:2030 iyr:2010

hcl:#c0946f cid:275 eyr:1954 pid:772184635 ecl:#76add7 byr:2009 iyr:2018 hgt:151cm

ecl:#52ed0f eyr:2033 hcl:#18171d pid:475397948
byr:1946 iyr:2028 hgt:178cm

iyr:2012 hgt:152cm
eyr:2027 byr:1923 ecl:brn
hcl:#18171d pid:513722888 cid:171

iyr:2029
hgt:111 hcl:z ecl:#33e3bc eyr:1930
byr:1934 pid:94036732

hgt:154cm eyr:2024 hcl:#6b5442 iyr:2017
byr:1974
ecl:amb pid:470968353 cid:345

hgt:184cm hcl:#617375 eyr:2028
byr:1975 ecl:oth
iyr:2018 pid:735589126

cid:261
hcl:#cfa07d pid:213013397
hgt:187cm
ecl:gry iyr:2016

hcl:#623a2f
ecl:#34964b eyr:2009 pid:169cm byr:2028 hgt:169cm
iyr:2028

eyr:2029 iyr:2016
byr:1985
hgt:192cm hcl:#602927 cid:167
ecl:blu pid:620818510

eyr:2029
byr:1968
ecl:blu
hgt:183cm iyr:2011 pid:952376140 hcl:#efcc98

iyr:2020
byr:1981 pid:850136149 eyr:2028 hgt:159cm hcl:#7d3b0c
ecl:brn

ecl:brn pid:480452858 hgt:65in cid:340 eyr:2022
byr:1946
hcl:#602927 iyr:2015

hgt:172 hcl:z eyr:1958 iyr:1941 byr:2019 pid:389995951 ecl:dne

byr:2025 hcl:4c8dcd
hgt:177in
ecl:#55d635
cid:197 pid:91192572
iyr:1921 eyr:2038

iyr:2027 pid:154cm
hgt:185in byr:2012
eyr:2036 hcl:efd47d
ecl:#64f98d
cid:86

eyr:2029 pid:837224515 ecl:grn cid:231 hcl:#733820 iyr:2019
hgt:159cm
byr:1977

pid:974518338 byr:1964 hcl:#cfa07d ecl:grn eyr:2030
hgt:61in
iyr:2019

iyr:2019
hgt:192in cid:94
eyr:1922
byr:1925 hcl:z ecl:utc pid:#081266

eyr:2027 iyr:2019 cid:328 byr:1961 hcl:#6b5442 ecl:blu hgt:177cm pid:235426720

byr:1959
eyr:2025
pid:890034625 ecl:oth
hgt:62in cid:348 hcl:#733820

hgt:161cm iyr:2018 pid:916160791 ecl:grn
byr:1951 hcl:#44d03a eyr:2025

hgt:158cm byr:1942 iyr:2012 hcl:#602927
eyr:2026 ecl:gry pid:651231060

ecl:hzl cid:340 pid:086942161 byr:1986 hcl:#a97842 iyr:2018
eyr:2028
hgt:181cm

ecl:blu
pid:278922687 cid:238 iyr:2018 hgt:153cm eyr:2027
byr:1965
hcl:#733820

eyr:2023 cid:208 hgt:178cm hcl:#341e13 byr:1937 pid:290981079 iyr:2010 ecl:grn

hcl:#888785
ecl:amb
byr:1943 pid:559804716 eyr:2026 hgt:166cm
iyr:2019

pid:947831563
ecl:gry
byr:1960 hcl:#341e13
iyr:2016 hgt:173cm eyr:2029

ecl:blu iyr:2016 pid:724632073 hcl:#623a2f
eyr:2028 hgt:192cm byr:1958

byr:2021
eyr:2016 hcl:z iyr:1988 pid:65353943
ecl:#bb553b
hgt:125

hcl:#efcc98 byr:1963 pid:290433211 eyr:2023 ecl:hzl
hgt:172cm iyr:2013

iyr:2015 ecl:brn
byr:2023 hcl:#18171d
pid:325330679
hgt:190in eyr:2023

pid:745674970 hgt:160cm eyr:2021 byr:1925 ecl:gry hcl:#341e13 iyr:2015
cid:297

eyr:2021
pid:596411633
byr:1947 ecl:blu cid:191 hcl:#341e13 hgt:168cm iyr:2019

eyr:2030 pid:#902a6b iyr:1997 hcl:11f396 hgt:188cm byr:2025
ecl:dne

eyr:2025
byr:2006
hcl:#888785 ecl:hzl hgt:187cm
iyr:2012 pid:017702828

byr:1988 hcl:#18171d iyr:2019
pid:110591871
ecl:hzl
hgt:160cm
eyr:2029

ecl:brn
hcl:#c0946f iyr:2030 pid:264404022 byr:1984 hgt:59cm eyr:2040

pid:5973803069
hcl:#cfa07d ecl:grt
hgt:153cm eyr:2039 byr:1970
iyr:2025

hcl:#fffffd
iyr:2022 byr:2026
hgt:180 pid:82035145 eyr:2034 cid:118 ecl:utc

hgt:186cm eyr:2026
ecl:brn
iyr:2013 hcl:#8f4c9b pid:010260339 byr:1948

ecl:amb hcl:#18171d iyr:2020 pid:259501214 byr:1978 hgt:193cm
cid:263 eyr:2022

hgt:161cm iyr:2015 byr:2014 eyr:2003
pid:708958872 ecl:grt
hcl:f4a430

hgt:170cm eyr:2021 pid:911638274 cid:110 byr:1963 ecl:blu
iyr:2015 hcl:1eda64

ecl:oth byr:1949 hgt:174cm hcl:#18171d eyr:2022 iyr:2019
pid:305857230

ecl:gry hcl:#a97842 pid:971971076 byr:2002 iyr:2019
hgt:188cm
eyr:2022 cid:238

eyr:2027 pid:221315043 iyr:2010 hgt:159cm ecl:blu byr:1998 hcl:#6b5442

hcl:#888785
byr:1926 eyr:2022 pid:433807814 ecl:grn
iyr:2010
hgt:181cm

ecl:grn hgt:164cm byr:1951 hcl:#18171d cid:75 pid:845508281 eyr:2021 iyr:2017

pid:#f59bc7
eyr:1987 hgt:191cm hcl:z byr:2024
iyr:1985

hcl:#623a2f pid:497429747
hgt:189cm
byr:1987
eyr:2027 iyr:2012 cid:95 ecl:hzl

byr:2000
hgt:165cm
iyr:2017 pid:519443292 eyr:2029 cid:240 hcl:#a97842
ecl:blu

cid:67 pid:038299774
eyr:2023 iyr:2015 hgt:179cm byr:1941 hcl:#18171d ecl:amb

byr:2000
eyr:2025 ecl:oth iyr:2017
pid:334154607
hcl:#fffffd hgt:173cm

hcl:#888785 ecl:amb
cid:131 iyr:2018 byr:1996 eyr:2026
hgt:180cm pid:709543988

iyr:1988
pid:263277424
hcl:ee8912 byr:1942 ecl:gry eyr:2040 hgt:161cm

eyr:2020 byr:1966 iyr:2020 hgt:169cm pid:611918000
hcl:#7d3b0c ecl:hzl

hgt:164cm ecl:brn
iyr:2015 pid:192054454 hcl:#6b5442 byr:1987 eyr:2022

byr:1952
ecl:zzz
pid:215953654
eyr:2021 hcl:#efcc98 hgt:153cm iyr:2026

hgt:167cm
hcl:#b6652a pid:847614726
eyr:2022 ecl:gry byr:1990 iyr:2015

hgt:185cm ecl:oth iyr:2012
byr:1933
cid:250
pid:038674023
hcl:#c0946f

pid:613273980 hcl:#a97842
ecl:oth byr:1924 hgt:179cm
eyr:2027 iyr:1950

hcl:#cfa07d byr:2018 hgt:190cm pid:64530329
ecl:brn
iyr:2024

hcl:z hgt:70cm pid:18807747
cid:284 byr:2023
eyr:2035 ecl:#4a1501
iyr:1954

iyr:2016 hgt:152cm pid:886247173 byr:1940 hcl:#c0946f eyr:2027 ecl:oth cid:150

hgt:152cm hcl:#48cfdf eyr:2025 cid:277
ecl:oth pid:246230621 byr:1932
iyr:2020

ecl:amb pid:871180042
cid:117 hcl:#602927 iyr:2011 hgt:152cm
eyr:2030 byr:1999

eyr:2024 ecl:hzl hgt:171cm
byr:1934 pid:356408125 iyr:2019 hcl:#b6652a
cid:169

eyr:2023
hcl:#7d3b0c
byr:1934 hgt:67in ecl:oth pid:191785527
cid:117 iyr:2016

iyr:2029
hcl:#602927 eyr:2022 byr:1931 ecl:oth hgt:192cm
pid:231475143

ecl:grn iyr:2014 cid:250 hcl:#b6652a byr:1970 pid:675238417 hgt:162cm
eyr:2026

ecl:brn
hcl:#623a2f eyr:2021 pid:293293433 hgt:158 byr:1977 iyr:2019

ecl:oth hcl:#ceb3a1 pid:013111996 eyr:2023 hgt:180cm byr:1976 cid:224

hgt:61cm
eyr:2027 ecl:amb pid:181cm iyr:1932
byr:1974
hcl:#18171d

byr:1968 hgt:167cm
hcl:#a97842 eyr:2022 iyr:2018 ecl:hzl pid:940968694

iyr:1943
hgt:96
cid:229
hcl:z eyr:1990 byr:2007 pid:#25aa73
ecl:#74592e

hgt:182cm iyr:2018 ecl:hzl eyr:2029 byr:1946 pid:602345030
hcl:#ceb3a1

pid:750306036 eyr:2020 hgt:181in ecl:xry
iyr:2011 hcl:z byr:1971 cid:71

pid:183825747 iyr:2019 hcl:#6b5442
byr:1974
hgt:180cm eyr:2028
ecl:amb

ecl:brn cid:200 pid:576495225
byr:1924
hcl:#efcc98 eyr:2022 iyr:2017 hgt:185cm

iyr:2020 hgt:167cm byr:1965 ecl:brn hcl:#888785
eyr:2028 pid:752062953

byr:2026
hcl:z
eyr:2020
ecl:#b4ec74 pid:187cm iyr:1974
cid:326 hgt:150cm

byr:1996 pid:507323629
iyr:2015 cid:347 eyr:2026 hcl:#efcc98
ecl:amb hgt:157cm

byr:2017 pid:456780590 hcl:#888785 eyr:1966 ecl:amb iyr:2023 cid:187 hgt:62cm

ecl:hzl iyr:2015 hcl:#6b5442 hgt:152cm eyr:2028 byr:1982 pid:003269467

iyr:2017 eyr:2026
ecl:blu cid:70 hcl:#7d3b0c
byr:1966 pid:160330947 hgt:189cm

iyr:2010 ecl:amb
hgt:164cm eyr:2029 byr:1963
pid:596606374 hcl:#efcc98

hcl:#fffffd cid:277 pid:102326370 hgt:154cm eyr:2026 iyr:2012 byr:1968
ecl:hzl

ecl:oth pid:477189554 hcl:#6b5442 eyr:2022 byr:1948 hgt:74in cid:181
iyr:2016

hgt:169cm hcl:#d7bc93
cid:344 ecl:oth
pid:#09c55d iyr:2017
eyr:2030 byr:1928

hcl:5d02ff ecl:#ca7901 iyr:1959 byr:2006 eyr:2022
hgt:164in
pid:#d6cdfd

ecl:amb pid:5739190196 eyr:2021 hgt:157in hcl:#efcc98 byr:2018 iyr:2028

byr:1995 ecl:hzl
iyr:2017
hcl:#a97842 pid:917039291 eyr:2026 hgt:175cm

iyr:2017 pid:756519868
hcl:#623a2f
eyr:2028
hgt:158cm
ecl:amb byr:1957

iyr:2012
hgt:158cm
byr:2014 pid:973021666 hcl:f04766 eyr:2035 ecl:utc

ecl:blu
byr:1989 eyr:2022
pid:520765501
cid:200 hgt:193cm hcl:#a97842 iyr:2011

byr:1959
ecl:blu hcl:#733820 cid:284 hgt:162cm
eyr:2022 pid:751629408 iyr:2016

byr:1978 cid:301
ecl:oth hgt:67cm hcl:#888785
eyr:2040 iyr:2025 pid:26038514

iyr:2020 byr:1974 hgt:163cm ecl:blu hcl:#7d3b0c eyr:2028 cid:99

hcl:#a97842
hgt:186cm
ecl:grn byr:1969 pid:460360492 iyr:2011 eyr:2028

byr:2009
pid:489490924 eyr:2031
hcl:cb5351 ecl:#083a25 hgt:164cm

iyr:2019
hcl:3463cc ecl:amb pid:4089063078 eyr:2022 hgt:150cm
byr:2007

eyr:2028 hcl:#ceb3a1
hgt:191cm iyr:2019 pid:737842199 ecl:blu cid:268 byr:1925

pid:868397851
hcl:#efcc98 ecl:grn iyr:2017 eyr:2021 byr:1943
hgt:179cm

hcl:#623a2f byr:1987 eyr:2023 iyr:2019 hgt:152cm
pid:473569020
ecl:grn

pid:953968630
hgt:175cm
byr:1971 ecl:blu hcl:#623a2f iyr:2017 cid:336 eyr:2030

ecl:grt hgt:74cm byr:2022 eyr:2024 pid:39114027
iyr:2026 hcl:4b5675

pid:#492988
eyr:2032 hgt:63cm iyr:2006
ecl:#817211 byr:2019

pid:800367032 hcl:#341e13
ecl:#765111 iyr:2012 byr:2006 hgt:166cm cid:291 eyr:2027

eyr:2021 iyr:2012 pid:876581393 ecl:amb hcl:#866857
hgt:64in byr:1993

iyr:2017 byr:1996 ecl:hzl pid:038990744
eyr:2028
hgt:177cm
hcl:#c0946f

hcl:#4214a6
eyr:2021
iyr:2019 cid:72 byr:1939
ecl:hzl pid:783071912 hgt:187cm

eyr:2020 hgt:158cm
pid:274060737 cid:277
iyr:2015 hcl:#bf9b5e byr:1950 ecl:brn

byr:1921 hcl:#7d3b0c cid:329 hgt:155cm eyr:2030 pid:718399669 iyr:2011 ecl:brn

cid:147 eyr:2021 hgt:167cm iyr:2010 ecl:grn byr:1975 hcl:#6b5442
pid:285479783

hgt:187cm
byr:2004 eyr:2025 hcl:bb331b
pid:851189955 iyr:2016
ecl:amb

hcl:#94007d pid:361561551 byr:1927 eyr:2026 iyr:2020
ecl:gry hgt:158cm

byr:1993 pid:#24c4af iyr:2023 hgt:175cm eyr:2028
hcl:z ecl:hzl cid:308

byr:1985 hcl:#c0946f eyr:2034 hgt:172cm
cid:300 iyr:2013 ecl:gry pid:389455676

eyr:2030 iyr:2017 byr:1956 hgt:178cm
pid:864401853 hcl:#6b5442

pid:836559549
iyr:2011
hgt:167cm
ecl:amb hcl:#c0946f
eyr:2026 byr:1981

pid:111085991 iyr:2011
ecl:blu eyr:2026 cid:311
byr:1920 hgt:182cm hcl:#602927

ecl:oth pid:284436132
byr:1929 cid:121
eyr:2027
iyr:2010
hgt:75in
hcl:#6b5442

byr:1987
hcl:#7d3b0c iyr:2018 hgt:180cm
ecl:blu eyr:2029 pid:878348021

hgt:183cm cid:98
byr:1953 hcl:#866857 eyr:2021 iyr:2012 pid:158898193

eyr:2030 pid:039638764 ecl:hzl hgt:190cm byr:1926
cid:294 hcl:#b6652a iyr:2017`;

const inStr5 = `FFBBFFFLLL
BFBFBFBLLR
BFFBBBBRRR
FBFBFFFLLL
FFFBFBBRRL
FBBFFBBLLR
FBBBFBFRRR
FBFBBFFLLL
FBFBFBFRRR
FFBFFFFLRL
FBFBFBBLRL
FBFFFBBLLR
FBBBBBFLLL
BBFBFFFLLL
FBBBBFBLRL
FBBBBFBRRR
FBFFBBBLLL
FBFFFFFLLR
BFBFFFFRRL
BFFFBBBLRL
FBBBBFBRLL
BFBFBBBRLR
BFBBFFFLRR
BBFFFFBRRR
FFBFBBFRRR
FFBFBFBLRR
BBFBBFBRRL
BBFBFBFLRR
FBBBBFFLRR
BFBFBBBLRL
BFBFFFFRLL
BBFFFBFRLR
BBFFFBBLRR
FBFBBBFRRL
BFBFBBFLRL
BBFFBBBRLL
BBFFBBBLRL
FBFFFFFRLR
FBFBFBFRRL
FBBFBFBLLR
BFBBFFBLLL
BFFFFBFRLR
FBBFFFFLRR
FFFBBFBRRR
FBFFBFFLRR
FFBBFBBLLR
FBFBBFBLLR
BFFBBFBRLR
FFBBBBBRRR
FBFFBBFRLL
BFFFBFFRLL
BBFFBFBLRR
BFFFBFBRLR
BFFBBBFRLR
BBFBFBFRLL
BFFFBFFRLR
FBFFFBFRLL
BBFBFFBRLR
BBFFBFBLRL
FBBBBBFLLR
FBBBFFBRLR
FFFBBBFRRL
BFBFBBBRRR
BBFBFBBLRL
FBFBBBFLRR
FBFBBFBLLL
FFBBFBFLLR
BFBFBBFRLR
FFBFBBBRRR
FFBFBFFRRR
BFBBFFFRRL
BFFBBBBRLR
BFFBFFFLRR
FBBFBFBLLL
FBFFBBBLRL
BFBBBBBLRR
BBFBFFFRRL
BFBFFFFLRL
BBFFBBFRLL
FBFBFFBLRR
BFBFBBFRLL
BBFFFBFLLR
BFBFBFFLRL
BFBFBFBLRR
BFFFFFFRRR
FFFBFBFRLR
BFFFFFBRLL
BFFFBFFLRL
BBFFBFFLRL
FFBBBFFLLL
FFFBFBBRLL
FBFFBBFLRR
BBFBFFFLRL
BBFBFFBRRR
FBFFFBFLRL
FFBFFBBRLR
FBBBFBBLRL
BFFFBBFRLR
BBFFBFBRLR
BFFFFBFRRL
FBFBBBBLLR
BFFBBFFLRL
FFBFFBFRLR
FBBFFFFLLL
FBFFBFFRLR
BFFBFBFLLL
BFFFBFFLLR
BFFBBFBLLR
FBBBBBBLRR
BFFFFBFRLL
BBFBBBFRLR
FFBBFFFRRL
FBBFFFBRRL
FBBFFBBRLR
BBFBFBBLLR
BBFFFBFRRL
BFFFBBFRRL
FBFBBBFLLL
BBFFFBFRRR
FBFBBFFRLR
BBFFFFFLRR
FFBFFFBRRR
BFBFBBFRRL
FBBFFBBLLL
FFFBBFBLRL
FBBFBBFLRR
FBBFBFBLRR
FBFFFBBRRR
BBFFBBFLRL
FBBFFBFLRR
BBFBBFFLRR
BFFFFFFLRL
FBFBFFFLLR
FBBFFFFRRR
BFBBFFBLRR
FFBFFFFLLR
FFBFBFFLRR
BBFFFBFLRR
FBBFBBBRLR
FBBFBFBRRR
FBFFBBFLLR
FFFBBFBRLR
BFFBBFFRRR
BFBFFBBLLR
BFFBBFFRLL
FBBFBFBLRL
BBFFBBFRLR
BFFBFBBLLL
FBBBBBBRRL
BBFFBFFLLL
FBFBFFFRRL
FBBBBFBRLR
FBBFFBBLRL
FBBFFFBRLR
FBFBFBFLRR
BFFFBBBRRL
FBFBBBFRLR
BFFBBFFRRL
FFFBFBBLRL
FBBFBBFRRL
FFBBBBFRRL
FFBBBFBLLL
FBFBBBFLRL
FBBFFBFLLL
FFBFFBFLLL
BBFBBFFRLL
FBBFBBBLRR
BFBBBFFRRR
BBFFBBFRRL
BFFBFFFLLR
BBFBBBBLRL
FFBBFBBLRR
BFFFFFFRLL
FBBFBFFLRL
BBFFFFBLRL
BFBFFFBRLL
FFBBBFBRRL
BBFBFBBRLR
FBBBFFBLRR
BFBBBFFLLR
BFBBBBFRLL
BFBBBFFLRL
FBFBFFBLLR
FFBFBBBLLR
BFBBFFFLLR
FBFFBBFRLR
FFBBFBFRRL
BFFBFFFRRL
BBFBFBBRRR
BFFBFFFRLR
BFFFBFFLLL
FBBBFBFLRR
FBFFFFFLLL
FBBBFFFLRL
BBFFBBBRLR
BBFFBFFRRL
FFBFFFBLLL
FFBBFFBRLR
FFBBBFFRRR
BFBBFBBLRR
BFBBBBFLLR
BFFFBFBRLL
FBBBBFFRRL
BFFBBBFLRL
BFFFFFFLLR
FFBBBBFLRL
BFBFBBBLLR
BBFFFFFRLR
FBBFBBFLLR
FFBBBBFLRR
BFFBFFBRRL
BFFFBBFLRL
FBBBFFFLRR
FBBFFBBRLL
FBFBFBBLRR
FFBBFFBLLL
FFBFBBFRRL
BFBBFFBRRL
BFBFFBBRRL
FFFBBFFLLL
FFFBFBBLRR
BFBBFBFLLL
BFFFBBBLRR
FBFBFFFRLL
FBBBFBFLRL
BFBFBFBRRL
FBFBBFFRLL
FBBBFBBRLR
FBFFBFBLLR
FFBFBFFLLR
BFFFBFBLLR
FFFBBBFLRL
BFFBFBFLRL
BFFBFBBRRL
FFBBBBBLRR
FBBBFBFRLR
BBFBBFFRLR
BFBFBFBLLL
BFBFFFBRRL
FFBBBBBRRL
BBFFFBBRLR
FBBBBFFLLL
FFBBFBFLRL
BFBFFBFLRR
BFBBBFBLRR
BFBBBBFLRR
FFFBFBBRRR
BBFBBFBRRR
FFFBBBFLRR
FBBFFFBLLR
BFFBFBBRRR
FFFBBBBLLL
FFFBBFBLLR
BFBBBFFRLL
FBBBFFFRRL
FFBFFFFRRR
BBFFFFBLLL
FBFFFFFLRR
BBFFBBFLRR
FFFBBBFRRR
BBFBBFBRLR
FBBFFBFLLR
FFBFBBFLLL
FFBBBFFLRR
FBBFFFBLRL
BFFFBFBRRL
FBBFFFFRRL
FFFBFBBLLR
FBBFFBFRLR
BFFBBBFLRR
FBFFBFFRRR
BFBFFBFRRR
BBFFBFFLLR
FFBBFBFLLL
BBFBBBFRRR
FBBBBFFRLL
BFBBBBFLRL
BBFBFFBLLL
FFBFBBFLLR
BBFFFFBLLR
BBFFFBBRRR
BFFFBFFRRL
FFBBFBBRLL
FBBBFBFLLR
BFBBFBFRRR
BBFBFFFRLR
FBFFFBBLRR
BBFFFFFRRL
FFBFFBBLLL
BFFBBFFLLR
FBFFFBFRLR
FBFFFBBLRL
BFBBBFBRLL
BFBFBFFRLL
BFBBFBFRLR
FBBFBBFRLL
FBBBBFBLRR
FBBBFBFRLL
BBFBFFFLLR
FBBFBBBRRL
FFBFBBFLRL
BFBBBBFRRL
BFFBBFFRLR
BFBBBFBRRL
FFBBFFBLRL
FFBBBFBLRL
FBBFBBBLLR
FFBFFFBRLL
BFFFFBBLRR
BFBBBBBRRL
BFFBBFBRRR
BFFBBBFLLR
BFBFBFFLLL
FBBBBBBRRR
BFBFBBFLLL
BFBBBFFRRL
BFBFBBFLLR
FBFBBBBRLL
FBFBFBBRLR
BBFBBFFLLR
BBFBBFBLRL
BBFFBBFLLR
BFBFFBBRLR
FFBFFFBRLR
FBBFBFFLLR
FBFBFBFLLR
FFBBBFBLLR
FFBBBFBRLR
BFFBFBFRLR
BBFFFBFRLL
FFFBFBBRLR
FFBFFFFRLL
BBFFFBBRRL
FBFFFFBRRR
BFBFBFFLRR
FBBFBFFRLR
BBFBBFBLLL
FBFFBBBRRL
FFBBBBBLLR
BBFBBBFLLR
FFBFBFFRRL
FBFFFBBRLR
FBFBBFBRLL
BBFFFFFLLL
FBBBBBFLRL
BBFBBBFLRR
FBBFBFFLLL
FFBFFFBLLR
BFFBBBFRRL
FFFBBBBLRL
FFBBFBFRLR
FBFFFBFRRL
FFBBFBBRLR
FBBFBFBRLR
FBBBFBBLRR
FBFFFFBRLR
BBFBBBFLLL
FBFFFFBLLR
FFFBBBFRLL
FFFBBFFRLR
BFBBBFBLLL
BBFBBFFLRL
BFBBFFBRLR
FFBFBBBRLL
BFFFFFFLLL
BFBBBFFLRR
BFBBFBFRRL
BFFFFFFLRR
BBFFBBFRRR
FFBBFBBLLL
BBFBBFBLRR
FBBBBBFRRL
FFFBBBBLLR
FFFBBBBRLR
BBFBFBBLLL
BBFBFBBRLL
FBFBBBFRLL
BFBFBFBRLR
BBFBFFFRRR
FFBBBBFLLR
BBFFBBBLRR
FBBFFBBRRL
FFFBBFFRLL
FBFBBFFLRL
BFFFFBBLLR
BFFBFFBRRR
BFBFFFBLLR
FFBBFFBRRL
FFFBBBFRLR
BFFFFFBLRR
BBFBBBFRRL
BFBFFFBLRL
FBBFBFBRLL
BFFBBBFRRR
FBBFFBBRRR
FBFBFBBLLL
FFBBBBFLLL
FFBFFBFLLR
BBFBBFFRRL
BFFBBBBLRR
FBFBFBFLRL
FBBFFFFRLR
BBFBFFBLRL
FFFBBFBLLL
FBBBFFFRLL
FBBBFBBRLL
FBBBFFBRRR
FBBBFFBLLL
BFBFFFFRRR
BFBBBBBLRL
FBFBBBBRLR
FBFBFFFLRR
BFBBBBBLLR
FFBFBFBLLR
BBFBBFFRRR
FFBBBBBRLL
BFFFFBBLRL
FFBBBFBRRR
FBFFFBFLLR
BBFFBFBLLL
FBBBBBBLLR
BBFBFBBRRL
BFFFFBFLLL
BFBFFFBRLR
FBBBBBFRLL
BFFFFFBRRR
BFBBFBFLRR
FBFBBBBLRR
FFBBFBFRLL
FBBFBBBLRL
BFBFBFFRLR
FBFBFFBLLL
BFBBFFFRLR
FBFBFBBRRL
FFBFFBFRRR
BFFBFBBLLR
BFBBFFBLRL
FBBFFFFLLR
BBFBFBFLRL
BFBBFBBRRL
BFBFBFFRRL
FBFBBFBLRL
BFBBFFBRLL
FFBFFBFRLL
FFBBFFFRLL
BBFFBBBRRR
FFBBBFFLLR
BBFFBFBLLR
FBFFBFFLLL
FBBFFFFRLL
BFBFFBFLLR
BBFFBFBRRL
BBFFFFBRRL
FFBFBFBLRL
FBFFFFBRRL
BBFFFFFLRL
BFFBFFBLLR
FFBFFFBLRL
BFBFBBFRRR
FBBBFFBRRL
FFBBFBBRRL
BFFBFFFLRL
BBFBFFFLRR
FFFBBFFRRR
BFFBFBFRRR
FBFFFBFLLL
FBFBBFFLRR
BFBFBFBRLL
FFBFFFFLRR
BFFFFFBLLR
FBFBBFFRRR
BFBBBBBLLL
FBFFFFBRLL
BFBBBFFLLL
FBBFFFBLRR
FFBFFFFRRL
BFFBBBBLLR
FBFFBBFRRL
FBBFBFBRRL
FBFBFFFRLR
BBFFFFFLLR
BFBBFFFLRL
FBBBFFBLLR
BFBBBFBRLR
FBBBBFBLLL
FBBBFBBRRR
BBFFBFFLRR
BFFFBBBLLR
FBBFFBFRLL
BBFBFFBLLR
BBFBFFFRLL
FFFBBBFLLL
FBFFFFBLLL
FBFBBFBLRR
FFBFBFBRRR
FBFFBBBRLR
BFFFFFBLRL
BBFFBFBRRR
BFFFFBFLRR
FFBBBBFRLR
FBFFBFBRRL
FBFFFFFLRL
FFBFFFBLRR
BFFBBFBLLL
FFBBFFBRRR
FFBBFBFLRR
BBFFBBFLLL
FBBBBBBRLL
FFBFFBFLRL
BBFFBFFRLR
BFFFBFBLRL
BFBBBBBRLL
BFBBFBFLLR
BBFFFFBRLL
FFFBBFFLLR
BFFBBBBRLL
FFBBFFFLLR
BBFBFBBLRR
FBFFFFFRLL
BBFBBBFLRL
BBFFBBBLLR
BFFFBFBRRR
FBFFFBBLLL
FBFBFBBRLL
FFBFBBFRLL
BFBBBBBRLR
BFBFFBBLRL
FFBBFBBLRL
BFBFFBFLRL
FBBFBFFLRR
BFBBFBFLRL
FBBFBBFLLL
FBFFFFBLRR
FBFBBFFRRL
FBFFBFFRLL
BBFBBBBLLR
BFBBFFBRRR
BBFFFBBLLR
FBFBFBBRRR
FBBFBBFLRL
BFFBBBBLRL
FBFFBBBRLL
FFBFFFFLLL
BBFBFBFRRL
BFBFBFBLRL
BBFFFBFLLL
FFFBBFFRRL
FFBFFBBLLR
BFBFFFFLRR
FFBFBBFRLR
FFBBFFBLLR
BFBFBFBRRR
FBBBFFFRLR
FBFBFFFRRR
FBFFBBBLRR
FBFFFBBRRL
BBFFFFFRRR
FFBFBFFLLL
FBBBBFFLRL
FBFBBBBRRL
FBFBBBBRRR
BFBBFBBRLR
FBFBFFBRLR
FBFFFFFRRL
FFBFBBBLLL
FBFFBBBRRR
FBBBFFBRLL
BFFBFBFRRL
FFFBBBFLLR
FBFFBFBRLR
FFBFBFBLLL
FBBFBFFRRL
FFBFFBBLRL
BFFBFBBLRR
BFFFFBFLLR
FBFFBFBLRL
BFBBFBBLLL
FFBFBFBRLL
BFFBBBFLLL
FBBBBBBRLR
FBBBBBBLLL
FFBFBBBRLR
BFFFBBFLRR
BFBBBFBLLR
FFFBFBFRRR
BFFFBBBRRR
FFBFFBBRLL
BFFBFBFLRR
FFBBBBFRLL
BFBBFFFRRR
FBBFBBFRRR
BFFBBBBLLL
FBFFBBFLRL
BBFBFFBRLL
BFFFBFFLRR
BFBBBBFRLR
BFFBFBFRLL
BFBFFBBLRR
BFFFBBBRLL
FBFBBBFLLR
BBFBFBFRLR
FFFBBFBRRL
BBFFBFFRRR
BFBFFFFLLL
FBBBFFFLLR
FBFBBBBLLL
BBFFFFFRLL
FBFFBFFLLR
BBFFBBBLLL
FFBBFBBRRR
BFBBBFBRRR
BFBBBBFRRR
FFFBFBBLLL
FBBFFBFLRL
BBFFBBBRRL
FBFBBBFRRR
BBFFFFBLRR
BFBBFBBRRR
BFFBFFBLRL
BFFFFFFRRL
BBFFFBBLLL
FBFFBFFLRL
FBFFFBFLRR
FBFBFBFLLL
BFFBBFBRRL
FBBFFFBLLL
BFBBBFBLRL
FBFBBFBRLR
FBBBFFFRRR
FFBFFBBRRR
FFBBFFBRLL
FFBFBBFLRR
BFFFBFBLLL
BFFFFBBRLL
FFBFBFFRLL
BFFBFBFLLR
FFBBBFFRRL
BFFBFFFRLL
BBFFBFBRLL
FFBBFBFRRR
BFBFBBFLRR
FBFBFFBLRL
FBBBBFBLLR
FFFBBFFLRR
FBFBFFBRRL
BFFFFBBRRR
FBBFBBFRLR
BFFBBBFRLL
BBFBBBBLLL
FFBBFFFRLR
BFBBBBBRRR
FBFFBFBRRR
FBFBBFBRRL
FBFFFFFRRR
BFFFFBFRRR
BFFBBFBLRR
FBBBFBFRRL
BBFFFBBLRL
BFBFFFBRRR
FFBBFFFLRL
FFBFBFBRLR
BFBFBBBRLL
FBBBFFBLRL
BFBFFBBLLL
FFBFFBFLRR
FFFBFBFRRL
FBBBBFFRRR
BBFFFFBRLR
FBFBFFBRLL
BFBBFBFRLL
BFFFFBBLLL
FBFFBFBLRR
BFFFFFFRLR
FBFBFBBLLR
FFBBBFFLRL
FFBFBBBRRL
FBBFBBBRLL
BFFBFFFLLL
FFBBFFBLRR
FBBBFBBLLL
FBBFBFFRLL
FBFBBFBRRR
BFFBBFBLRL
BFBFBFFRRR
FFBBBBBLLL
FFBFBFFLRL
FFBBBFBRLL
FBBBFBFLLL
FBBBBBFRRR
BFBFFBBRLL
FBBFFFBRLL
FFBBBFFRLL
FFBFFBBLRR
FBFFBFBRLL
BBFBFBFLLL
BFFFBFBLRR
FBBBBBFRLR
FFBBBBFRRR
BFFBFBBRLL
FFFBBFFLRL
BFBBFFBLLR
BFFFFBBRRL
FFBFFBBRRL
FBFFBFFRRL
FBBBBBBLRL
BFFFBBBLLL
BBFBFFBLRR
FBBFFFFLRL
FBBBBBFLRR
BBFBBFBLLR
BFFFFBFLRL
FBBBFBBLLR
BBFBFBFRRR
FFBBFFFRRR
BBFFFBFLRL
BFBFFFBLLL
FFBBBBBLRL
BBFBFBFLLR
BFBFBBBLRR
BFBBFFFLLL
BFFFFFBLLL
FBFFBBBLLR
BBFBBFFLLL
BFBBFFFRLL
BFBFFBFLLL
BFFBBFFLRR
FFBBBFFRLR
BFFFBBFLLR
BFFBFBBLRL
FFFBBBBRRL
BFFFBBFLLL
FBFBBFFLLR
FBFFBBFRRR
FBFBFBFRLL
BFBBFBBLRL
FFBBBBBRLR
FFBFBBBLRL
FFBFBBBLRR
BBFFBFFRLL
BFFFFBBRLR
FFBFFBFRRL
FBFFFBFRRR
FBBBBFBRRL
FBFFBFBLLL
BFBFFBFRRL
FFBFFFFRLR
BFBFBBBRRL
FFBBBFBLRR
BFFFFFBRLR
BFFBBFBRLL
BFFFBFFRRR
FBFFBBFLLL
BFFFBBBRLR
FBFBFFBRRR
FFFBBBBRLL
FBFBFBFRLR
BBFBBFBRLL
FBBBFFFLLL
BFFFFFBRRL
FBBFFBFRRR
FBFBBBBLRL
BFBFFFFLLR
BFFBFFBRLR
FFBFBFBRRL
BFBFBBBLLL
BFFFBBFRLL
BBFBFFBRRL
BFBFBFFLLR
FBFBFFFLRL
BFBBBBFLLL
FBBFFFBRRR
FBBBBFFRLR
BFFBFBBRLR
FFBBFFFLRR
FBBFBFFRRR
FBFFFFBLRL
FBBBFBBRRL
FBBFFBFRRL
FBBFFBBLRR
FFFBBFBLRR
FBFFFBBRLL
BFBFFBFRLR
FBBBBFFLLR
BFBBFBBLLR
FFBFFFBRRL
BFBFFBBRRR
BFBBBFFRLR
FBBFBBBLLL
BFFBFFBLRR
FFFBBBBRRR
FFFBBFBRLL
BFFBFFBLLL
BFFBFFBRLL
BFFBBFFLLL
FBBFBBBRRR
BFFBFFFRRR
BFFBBBBRRL
BBFBBBFRLL
BBFFFBBRLL
BFFFBBFRRR
FFBFBFFRLR
BFBFFFFRLR
BFBFFBFRLL
BFBBFBBRLL
FFFBBBBLRR`;

const inStr6 = `onitvpuwxqczlmkabsjrgedfy
epdjqbxlnimfaowtzgsyku
pejglyqnwuaodzsbmfxikt
ojkpytdhignxuqebzlwsfma
gfadqolubinjxtkwpemszy

i
x
i
i

nmtyqwsoglva
nyvtsgwmlaoq
ysgmlnwvatqo
nvgdamotqyslw
ylmgtaqsnvow

uoqwrdpbntje
cqpjnou
jnupyoq
npojuqs

tbsafengq
eabqsftgndmx
beaintysgqhof

ygtdfwuaorvchpnqzjlkbs
fatqvskwudbljphryogc

jgewimpbkdaoslr
ypxzgdwqteshnau

vdytrl
rcltq
ztlmkoi
tylr
gtlba

oxgpa
ogaxp
pgoxa

edi
jtm
b
jmug

deoptcxnjhrqu
termcldofphxv
ckgbwhedpsroxt

owhkn
hotwknq

hscufpqg
tfnupahqglb
rqeigmxdov

ndvbgkctqhyia
cdbnaityvghkq
akyqbivhdcngt
qlikvbghnctdya
kgatiqyhcbdvn

u
ue
u
ku
u

oky
ok
ko

oiw
zch

fxzpdcutqrgye
fdtxqyaeuzgrnpm
bpfwrkxzyhguvqjiosl

edgtrynxsfuojq
emxulhvaqwzkd
vzbucdeqxip

ine
no
gn
okngv
uqtsnb

z
zyr
gwblk
cy

ujgweobsncqvkl
suloibqncvweg

vyaqhlx
uignrjlbhoa

jnwgzhxivb
niwxzfg
tgckdqiepwxzrm
yzigxwnu
zwihjlxgov

hz
t
kfbye
hr

mxbjytcpdv
jbtdcipmvy

djnzloupqgftaibhyvexkcms
bkopljahvxiecdmnygzsftqu
sbkefojlvmynqgzcuhpdixta
gusvkbqtxemailypcdnzohfj

wos
uscwo
owzs

esbmgprfvaldcwxn
scdxpezwvbmflagrnt

qimplaudwo
wmiopuq

lrnha
rhjatnl
lnahru
arbnhxiel
frnalzhj

lpdusr
rmpludz

dmqtpnaeloxshgyj
syimnjqhctolapzvxdg
kqagxotudlbwnhrmfpjy

dwjkfgmpq
ijgdqtf

veymdkxsfuhbr
xhzdyfskvirubme
fubrhyvdexmks

pcujgseytofn
tvngpoyjdsaeucf
jtrgbfyhezoinkcwsp

mpnfcvwurqazyebxksdj
esfbmwcykpdrxjqvzuan
sewamfyrqpkjxncbzvdu

nqafy
qjvpfl

amrvdhswyljkcfgiu
mvugwaifyshrdlkcj
hujmrwsfadiycgvkl
ulfaijxcdwgryvsmhk
gylidvcfkrwhujsma

uzyhklx
lxkyuhz
hulyxkz
hyuzlkx

ipmq
pq
apq
pq

nkvjmtseoh
njortvehs

vdijn
vjnd
dejnvc
jndv

k
ku
hk

hkdvnlzwmxsftuqjpaeboci
kadusyblhgfxwcnijzqpovtm

uetrqkvm
gerqtvkmu

kfhaqnluzcmsbwodyp
cbzohfqyknxlajdwsum

gjlenkd
ngkledj
dgknejl

tjqoxpuwlvhns
xzcmderkibgfy

cgyezvtbslamrfd
ruvafyeztxgko
eifznvgaypwq

qw
qyw
qw
wq
wq

dihagsqjwoceu
gcqoaduwhies

jimcebk
spdyvrqw
mhfanubejt

vbxo
xbvu

crdvtbnqjhwg
tqvbgndrhcjw
vqgtcjwrbhd
sgrbtjdfqhwuocv
bjlvdrthwgqxc

hplsrmuwevjbkxzoticg
pkbajhwzqgevyf
bhpdaekjgvyzwn

yc
qpas
xyu
rx

icyorxhzfmalsj
brvfamjchlxizyw
zmlbxcijafyrh
iahfymzxjqrpcl
hcaijyrplqzmfx

jihyxlsepo
pxyceoijlhs
rlubjhemitoayxs

qnpfsugkcv
svjidkgmrlun

ywzrmlcpdvbua
acxjgytmfbhoq
aysqmibfkjxecnh

inbhzjcevlwpgqtuxf
mpcyvenfxszjthguaqwb
nbivgwqrjhxfzcetup

dosgweiakxtqzvnyp
anixdzlewskyqgtp
eqswifhymrzpaxujktdgnb

uebmar
abepugr
bupare

xqieovmrhwzautbd
iqrmzdwxbevoua
aezmburvxidoqw

guhenaisrqf
fheruiqgnas
pqkhetasgnrufi
eulrghsfanqi

zrdkwol
dlnojk
dkvzoyi
yzokdjih
audpbqgockxe

zjnirkef
jknb

briyfaedx
darnixuyfb
rmafybxid
jisaywdkbfgrx

azh
qw
qwar
rd
unmpy

fbs
hjosrzg
fs
ns
ys

nscofqwtxrejvdizpablgy
pbzoasryeqcftdxwjvgl
vtjfelbgyxcpzuorsdqwa
afvbgxqcpdestryowljz

qkxsgtlfh
omytrzvpe

ocrn
kyrmhafteuwbqx
sncvdr

dymo
hgqsvywocfb
ukxnejyz
hpoyrwvia

hmilqvgzybu
qvyhlzmigu
vzqlgxihumy
gmvilzqubyh
hkqzduligymv

nlbgx
glnb
glbn
bgln
gbnl

soqgwx
gqivswxdo
sqaoxhwgu
wxogeqs

jognfqazltusc
osfjzucmlng
cfulozgnjs

ajiwzbgc
wagbqizjc
azjbgciw
gcwbaizj

zk
zkux
krz
rzk
zk

xiyjlscpkevnbwthqrg
pgklxebuhysrjwnq
jlxkweybdrnhspqg
jnagbpxkfwrqusylhe

uaznwpjg
cndbywxp

htnbgrxzfivoucyqlpdeask
uaolphsrgdqkzbnefxctviy
aodbyvclisqgefnzpkrthxuw
apycbhdszlueonitfxkvgqr

r
dq
x

zjobcalmydgnhusekvqw
lcvmepodnyatuhsxzjrgiwq

jivelthfab
ilebvjtf

d
l
l
l
l

arpq
qrpa
qpra
arqp

toimfp
fomt
moft
fotm

mkclzvg
rhubsxtydaw

o
vk
o
pdat

cpiyjlemrubfzqaogth
cfzajulomeqgyhirptb
yfhieolpqcutzmrbagj
reblamiyhtfkuzoqjgpc
ybqotecahrmigzlufpj

vkze
zvwke
zevhk
esvkhzb
ezvk

gpqyzlomh
kvwujrsbtcfei

pzrhvoi
zipvrh
vzpihr

tpymbsjurcafkqhe
hmwaqtcbrfpksgyd
ofmlticskynrpzqhba
mhbscykqtepvafr
vmybqfashrpktc

uijrscazfylboqdxnwtgmh
cgirasfjznohwmqlu
hogunfcswqiajlrzm
wmrfqlscanjpuihzoeg
izfhvkmaocqjswlngur

nkqtoa
tnakq
qknat
qnakt
tqjkan

r
r
r
r

fvoxgbwtdhsculjpmaeyin
iubywltmnzdhkxaqrejgscp

fcyozjnkersqbxlavihd
lewiyqkzdousagjpnbtfcmr

lwiznrea
bvcu

hrexab
hpxrbka
cxizabrgh

khugcpbyrfmqnlesidx
ncdpfxsaqkevmyhlrjbug
ekfqpmyxsrlvuhgbdnc
qmfbplshxkdnercutyg
gknlmueodxqfphrbcsy

d
d
d

fub
vlsztofi
brf
kfn
f

japfuyzrshdim
fjmzudyhsopir
izypruhjfsdm

uectrmvolnqh
meqochvunrlt
outlrqechnavm
tcnhvolruqem
hmortnlqvuce

xjnidhwycavrpqumtb
anjwibuqymtpvchrxd
vpydtrnxuwjqimbhca
tpbvxcwrjauiqyhmdn
gbxmanylueiwvchtqprdj

xbkyzapsjiqmng
qoizbxkrapgmns

ixrmtpknofzs
rpmefklhzitxs
ifxlmhptkrezs

tdhez
ldzet
zde
zxqde
dez

cfgbvipxdjarhulmtsz
jihxbgdlcuvrstzma
bivtadrjzlcxgumsh
scxhtdvgrbmauiljz

qakxy
qrygaxl
qxyar

hcydn
xcdyhn

msi
mi
im

pcxmjag
xagpjunk
xfgpjaqlr
xugbjwpyna

yzhurm
yumehn
yuhpm

gutifmzkaew
nrxdpsv
qvxn
dxrcyj

xwycftgsnebjuhomvlrakdz
thnzfjymrlaeugxdocswbkv
qteafygurvnxdkzjpshomlbcw
gnrfkezjbloysvdmtuhawxc

r
r
ry
r

a
i
a
a
a

ibptdxrznheslmky
ondzfrpjbklxtimys
iyrautgpqvblxcndkswmz

i
zked
rq

epmks
svekm

plzebc
lepbxcz
zlepbc
zbaprclqe
icpzbel

xphyvtwqojigkrencdublfa
frkonpbdyavxtsheigwujlcq
uipdwgytjzoxhvqfkranclbe

bd
s
qkezvgrh
f
fa

p
p
p

pij
ptij
ijp

fygbrdcukwepmno
hlsvjgatiqf

ogflexkqdsbj
yxosqbdel
odwblxqspev
dxbesowrlq

lhtiqaonj
feirkvqjxlby

hojr
rjho
orhj
ohrj
hojr

anwtvc
adjmtnevqw
wxnastv
txankvw
uavnwgt

wdzbrt
scuzt

w
mtw
w
w
w

ve
e
re

ehko
okh

rdg
mr
ksiwurf
rnabqd

loqz
mothz
oze

mprcz
zrmuc

led
del
del
dle

fdmwrptq
rpdhfntbml

zmsvdjkycbfritqoxeulgpan
cuztqjedfmialbkyvprxgons
delvxkjcqbmyzogiftaspnur
zmepnuadxfbctijqroskylgv
ausvpbkzjcdxqmnlwhtoigrfye

jvfrtmluiks
kohpgyvxuidzbqeamcnw

ztwk
tlwzxku
kltgz
tjhzvk
kzciqt

let
letr
citlejhm
tle
xslet

xyzteu
xuetzy
uxtyze
qyoexutz

jedkqlhbxrvi
xdqilevjbkrm
dkirevqbjlxw

dizgv
digzv

muzhqcxlasvfw
shvqgaywb
hvaswqiry
navsehiyqjtw

wkpcqalunzdogirvej
evyncwpqbifrl
qlncvpweixrt
lwhfnrqvcmpie

zidupyhwxqjog
otfrnaycbes

yt
tyi
ty
ta

nigzxrupcdjtvasobhwq
sidgrxeofmvpwknuayt

x
yhd
z
s
sx

xdbsmwqihoutzgepjlkva
hjxlsdbtwigkqpmueovza

kmurn
mkq
dkjm
km

olhg
xldfykhvg
ng
uemiqpag

bsjyltpnm
mtypbslnj
tmsjnyblp

exomfdarziwubglvqc
muakbqnwdcrelviop
lfqhcuveoriawbdm
ehvuclmwqdiraobz

hy
yhve
g
zl

icybqeaxgfrhwszpnl
fqrdgnxpchlebysziw
qyghlwxrfpzsncbie
izwxresfbygjlvcnhpq

hjqifdbtmcl
njcix
pojcgik

dnwkpexog
xfqgso
brzjvyuogt
lodcngw
xigoda

lwicsbax
cidxwes
wshiecxv

vrcajmledfihkgt
ikvrelatjmchgpdf

gmiwhofuse
fgwesihumo
fumioewhsg

mtulgwsaojic
sijwoclmtaug
mlatsuowgijc
wglajocitsum

qb
e
va
b

viqkzfug

qdgkvsenbmxwhufac
gdwskcxfnqevuj
yckzdsxufnvegqw
qeukcdvfswxgtn
wegcfqnvdulkxjs

z
r
r
r
r

ujcfxtgeiz
jfuceitgxz
fzceuigjxt
ztufcxgjie

lnpquewxgaskbfhdt
mzirgovcj

fcribz
axdkwbiz

iuxdqygkwhrzfjn
mzheixfgatqvlunk

clsixgjnqvphyztob
njzmsxotywvhqclgp
fsovchjpxntlgzyq
ulycvjgsxtznfoqph
sxyvzpgjomlqtuhnc

kmblztu
etmzbk
qfzktbmi
nbtmzk
utmzbk

kywjs
wksjy
kjwys
wskjy

prncsbljtyxgamzvkouwhdfqe
cntevaiurfxjzohlpskgyqdw
kotwhepfrulyqjsdxzngacv

y
y
y
y

zrtvjfcsidplxakh
wmfknyolebhuqr

jselqogdxnkai
ojxgnekqadlh
axqoldjgnwe
ondksqjalvgexy
utafgeqndxojl

vxmbn
urjmbv
bmvu
mbv

ijrdocnlpmasuhxevz
ijnzyavrpxlhecuws
ouenvjizlcsaxhpr
jlrnxsaeivzupch
iurpxnsjzamecvlh

qbtympkiw
ibpqtmdnwyk
yqbtwmkpi

omlxcenguahbprt
srgwlxtfvzpynocqh
lbjtxnapdohkgriuc
nkhblrcdtogpx

bijzvwspuergxfykhqnot
zoyksqjpuxrwinetvhfgb
nkifyurjszgtvqwxbeohp
nfsvrwtyjiuexbzpohgkq

vnbur
nrbv
nzrvb
vnbr
vrbsny

zrbhlpuenxygdjaowsmiv
lmrvjnyqzdhsoxaguieb
jrzuhsgyveldnximabo
hozsixrndjbmuyalveg

fiynrscvz
lnxricvs

zd
dz
dz
rzds
dz

ucqoi
uib
umbief
uim

cjbhpyaxmsknwuqrfdvze
kjczaunprhvwqbsdfxeym
wuzpjkrcyehmqdvfbnsxa

zy
yz
ywvszd

flykisxv
fdxsinvyp
wyxtirvef
ivhqbxfyl

ieyhcbozswt
xymwa
qyvlurwgj
wdxanly

sdnobwuzcrepmhkjq
johqkdlerincxbsazuw

zpngeckafjmhq
pcjfzhnkmeaq
eczakjhfqmpn

chfdiv
fdsvrct
kxmgfvcapyd
wqdnefzvc
ctbefvduw

jqlaf
dqflja
fejalq

vunyzasqejkcp
pcjkevzsqymau
vqyznpakcsjeu
ksyucanqvepzj
zyqacepkvsuj

vfgtirsalzy
tuzfsgvrliqay
tifsgrzylva

nyevhuadf
unoqbyh
uynhwrk
bynuxh

twiqrp
wpqi

votlpuzghrkewfmjs
whkduvpcefqxanzjylosim

urlnqsfopxekw
mrgqolfcuepav

n
nh
n
n

x
ga

yihp
hiwpy
yhpqid
pihvey

brfenzw
dxkybzrie

vywmnzepihscud
msihuoypkczde
upyimedhscz
hyuzsopmdeci

tdkxzwvf
jvtywi
etwvi

ypjvrasilunbtqdx
broguvayljzpdtxqs
bdjtrvqlsyaxpu
fjvldbtipaysmkqrxu
phjxybqvtmnleursad

paqnxcdr
xrdcjpnq
qdrpxcnz
dxcqeknpr

bacuhisopvrtjly
ivuohtjspbcayl
htaljobyuvsicp
dvbialtyspuhcjo
txjabqhcpiewuyslov

xqfiwaorpengbyvkujl
pvewxnbjuazoikrflgyq
oewnfuphibgxmydvkalrjq
jflqibpgkwxuyaernsov

lnm
jlnm
lnm
nmlz
nlm

ifkvgwbux
yxguqfbvi
uixlwgvfeb
gvbufix
eifxvubgjz

amecyjkpf
jmyecpqdn
rbtjdpwack
lxszhcovgp

ivnfl
ihol
fcil
silyajudb
ifl

ywtnmdfeaxqr
eqyfrwntaxmd
axmntrqwefyd
yexqtndmroawfh
xeqfwdnyvmuatr

xfurwyjgmh
hurjgymwfx

hmzctpxvk
pchvxtzm
tchpzxmv
zcpevhtmx
oamchzvpkxt

q
q
q
qmn

snfjolcvibwqah
hlvqjfnciawo
qcnodvhalwjiyf

owmzkiehgnabfpysrduj
kpyehrdwqoacmiugzfjsnb

sqwxtuzajvibrhmc
rwcbuzaxpmiht
omftruldhbnace

zwmlydvatgrfcuqpsb
yqbdmupzrtvwaf
fmqepantxwvzubyr

xytefoikzngwd
zflkxqwayb

g
g
g
g
g

wkofhpezdnjutg
yhltejszpi
azbpestjh
zetjxhaip

ht
h
h

btmo
mobt
mgtbo
bomt

zskl
zklsf
lkzs
skzl

wnbdjeruyvslpzxmckft
kmcejnuldyvhxwoiftzb

nigmjydoukv
gjkumodvyri
mgvwkfypedzosuj
vymjdukoght
lyckujovngmd

cvgusohbrn
iacuyzmqpetrflx

gpt
uefzyhb
cgkvsmnl
rdivwgqtlp

otv
ltzycvxq
tvfwp
vtfgdwh

gbqzw
wzhbqe
bwzgq

shuvla
quzyjhdv
uhscjdey
aur
otipfwnbkmxug

ocpvhuwqdbmneykfzaj
ovpyqwnefazbuckjhd
ifhotawzqnkupyrbexcvjds
ojlauezvknfhwydpbqc
yoknplcqzfwhvbdujea

ghzj
igy
lzsv
qumbofr
e

ayhikcwbgjml
jwtcgqforxsekva
myzjwpkncdgua

vicomdrjquzshkbwtlpnfeay
ejcadvbtrypzowksmqfiuhln
cxypqvjksamwtdnozrflieuhb
dpjacvoqenfyimbksurhtlzw
kfcatrdowvpuynzejmsblqih

cr
wacduy
c

djv
vjd

ogldnxqtiys
elmfqcohdygkri
nslduvgyaqoij

clymkfiwz
hzkylmc

sakvjmyfizbcq
cyzmwkivqafbs
cabifmykjvzsq
kcvfymzuaisqb
qzehysbvmckifa

hditryzeu
juwpvnzo

ufqxci
qfuxicps
iucqfx
xcqfui
iuxfcq

pidvxwycu
zievnqjbgoyt

vbqmihp
evcntxykjubf
qhovdbm

jdfonaphgyxi
iwynxpajhog
nxogaiyhwpsj
ogaxhpsniyj
gjisaynpxho

zbrepv
alqfzgtdw

yfsoxnqjuz
xojwszfnqu
onjqfsxzu

lgvpdmnkiurtabfhsqz
zqcwafpibmu
mpfeayziqbu
bupfazimq
cuqzmoaifbp

eycspolqtmgxfinhubjdrav
cyahxpiqduemnstbflojgr
mpqntasfhbyudloxjcegri

orljgtybvwqczm
klrymowqtfgvjbxz
vrmzwtyqbeioj
bvphmtzsraywqjo

faylgwiq
faqigywl
qygawilf

hfywiasvurbomednlctkzxqg
roxedzcisgvawtnmubyhqlkf

vuijyqr
jqvrueiy
qturvyi

mpbxraufws
xfmsuwparb
buprxashwfm
wxuramsfpb
rsumwxapbf

erkp
fyugptxac
wqskpv
hsqkp

nogxpear
anpgoxer
rnaeogxp
rnpgxaoe

adnvfrotiqpzwyuk
bspxoalcjzyemk

qjzunbtcfpeka
uzxcakep
ukzpsace

kwyxcvnlqr
chyrqlvfkg
qjbpmosckaverydl
utvrzkhqiclyn

riahbufynqtdlmpvcgwo
pehyarlosbfdtnivwgmu
mjorpdwgnflhbtuaviy
lqpifrbndahtgyvumow
rmvpdnlbgwyohaifut

gpavjibrknhcqlm
qcvmghripabjknl
jqtbglpvanmichkr
cimhlvjgnarkbqp

ymacz
maycz
myazc
amczy
zmbyucak

agpsur
wuxgha

rzuhgywcpiso
wyrdvgziumco
cxgarwbziytuo

lpdzmx
dplmz
lzmpd
zdlmp
lmzpd

frdoayezvpsktjnmbg
rmacqnotwlfgxksbjvpy

wfqrzcyal
fyazqc
ykaqfbzct
fxzapqscvdge
afqzc

jhgfwptyqxkivucbzmslanodre
htbepirmlaksfncgvxyqudojzw

tw
wt
wt

iqzpnoyek
eqyzkmpnoi
gxwqzpekinyot
zndoiekypq
zyqeonfikp

yq
qy
qy
qy
qy

wips
ykwp
fhrjauwd
wiles

dxvsrgqwaouphlbct
rtpvolcbagshdxquw
tdrvoqacpbslwguhx

oif
oxfisdj
fio
foi
ifo

huizasogdpx
zuki
kzrtui

d
d
d
d
d

donxvciuf
tfcvnuldqaox

x
x
x
l
x

plnakucoyzxit
legpvwuhxzfr

lvmjdfwynebaqhstrp
sbayepvdjltnqcfmwrh
vejtmbnywsfqhrdlp
fjxetdpsylmhwrqbnv

makszcoungtfb
bztoacmguknsf
ugowhxdqanbtmijpvfsckel

wmbhjfrx
twbramjf
vyjswufdbpk
lbifqtjnw
jowbxif

irfpwxjenl
ewnfpxril
xwkrfnepil

dpwjzq
xjdszl
djz
eydknjzv
qzdj

duwmogcekjaixlhv
jkdovumgeihlcxa
gvpiaxlzuoejcfdmkh
lhgmvtxcwkjuaioed
meghjviuakodlxc

xoelhpvztacqdwyusrmgf
hscyfqwztglikpaduoxebnr
pgacfzqxtdjurseowyhl

xbcjsif
jcxbisf
xfjscbi
jcsxfbi
cjbixfs

gehfpztbindcma
zhitnefadcbmygp
mnedhbgfzaiypct
zpibghtmoeadnfc

oaypzsngw
ygpnouawxzsc
ypsoawgnz

pkfmshoulytcb
lpmsdtacyobhfu
dlyhusbtwomfcp
lymutphbcfsdo
fpsmctbhuoly

hyiaronfpjx
ypjnhixrofa

rlz
zlr
lrz
lrz
zlr

uztaxcpbngj
wkfngj
nsgj
egnjik

kzprnhav
ekrgafzvd
kvzaer
rfzvka

hmzesytalnxoidpqkucrvjw
kiwxhsetqrujzodcavlmn

fzpcawsbnhmrg
bganrmwhtcpfzs
qngcawipbhrmsfz
acrphnzbwsgfm
hnzsgbwrmapfc

tgsbymldoazj
zmbwkdyaostpj
szjdtmobqka
thebzvsrxidjmoan

lfamv
ljbamxf

r
f

lmpqfbsuxcagowh
nrucpjgwhba
ruakcdtngwhbvp

bdirz
rmnv
cidr
kuyxewtfhr
azrl

rshfoiwdcjyzktaqulnbepmg
rpkmtozysqifechajlnbgwdu
hafwblznqsuiecpgdomykrjt
efqyidlogkbjzapcrmswnhtu
dsaciglerwjuknfzmhotpqby

d
dt
ltd
cmd

wfktqjrhoul
pjtrhlqwkuf
tlrjuhfowqk
ktcmhnujrwlfq

xysfd
wok
t

ckbxnjyolfdawize
yefwxjbzoinpkcdl
cdyhkzfjiboexlnw
wfjdyebvrngcliokxz

nwmaljtku
wlminujkat
tjflnmukaw
wkcjnlumta
mjukonlwta

ydlsqjrekwicu
sidelwyx
yibwtloshde
lwuydesi

ygmh
myfdh

rftdqabxkunzgm
kbxnaufmqghtzd

u
f
f
vma
i

hxgncyiudjvkszl
lzsxkajufyighcd
yilkujgcdxzsh
ixdhzvjykufslgc
swymbpzdkecjguxrilho

p
egpf
p

iqec
ecqi

zubeh
huez
uhze
uhez
zehu

evtip
tvpei
htpvie
tievp
vtiep

zqydx
xzkqn

akfrplijmcdwbv
hgucpnykxtimfsa
paqklbemrcif

zqxdnfkgmursvpwh
emblatjicyo

efkobr
oefrbk
bfroek
ebofkr

sgpwbkcztuxflro
zopatwxrucfgbl
wkurcxbiglpztfy
xzurgntwbpcflh
ftrwulzbxcpg

zldgofcmki
zkhmlfiu
iekzdma
vikyrmzbpxqjt
wsimkz

qzjapnus
pnfjqzusa
pnjuqasz
funsqzjap
wqayjzusnp

akqhvfipw
hwkpiafvq

vqwrumak
aruvyqwkl
urkvawqf

tzmonhcwsdxy
keiutlpaqf
tpvfbru
etbgj

txq
tn
teli
tvl
lt

zgtsjdlk
tjgzs
ztjsg
ztsybgj
gzstj

zinaqxudyplvbmf
furbycpzvixlnam
ulpmbnvyizxajf
bauqplnvztixyfmo
soumpbfeixnyvazl

a
ai
a
a

kaolnziybtxrd
xdslyktbicrwomn

fybupjseqcmt
yjufempcbstq
tpyjuecvbqgslzxf

nfvxry
vx
vx
xv
xav

bycphurqtofvzmejg
scthbufvmyergqp
ypvucorhtxfegnqkbwm

fpgciebqjo
eftqgjpcibo
bczoqpfgiej
jobpcfeigq

ikflzmrobax
byoklfiazmxr
aolpmgxzfbrki
tauviflxkmhjznrsbo
rlzbmkafpwoiqx

zxgrsheoqvmand
jgkivfhmaxo

qrhwlmfoiakcxbnu
mizvykdfwnqegpu

tqghprcaowsxemivljzbn
bwrlnqgijzckdtovmphxsf
gvtnixcrjlhszqpbowm
ntrljwxzvmpgsobihqc

vnrtyixgah
tmwyihanvbf
ytahvinp
sarntyhvi

igj
ij
j
nj

cenajyhz
lkfsutaic
jyormceba

qoarlzhbpjsfdw
tbecnyv
gbcu
myxkcbv
nbig

cvh
uza
ysqmw
ukga

ckvohwuq
mfdgtbovclji
ovaryuec
cvqszxro
okuvrcse

cslo
loicw
clo

eibdaftnpkvozslur
tnvaeskduolfzqbri
frebanpdsovilztuk
baokzvdfnrutlesi

scqhtlwkxodgvmfjaebunry
qcvsihbjdrgwxezaoulmn

nkzlugqfheivcmtbdp
tghqkribvfpunlemc
jqlbpyouetmihxwkvanfs

emsjdnqwakiflxc
lkfdiejnwaxcmqs

opcsalzm
wazjl
fkapslzw
ilqabntz
czjalrv

evolyu
vrseo
ztuvoe

r
r
c

kcyva
kcvay
ykcva

vpfyshuxjl
jsxubvhyli
uhxylwsiajv

qoaxbgipkj
qpixolgykajw
kqcxnagpojhil
gzjmpuxtkfqodia
igqekojxap

tqgkxizfral
zxkgftqd
dkhqzgxfts

di
lt

zqapsde
uezarpg
zeap

vynpzifqelhdc
fnykpqdcvi
dpyvfncseqiz

ivcfyqpuzn
lyprisgjzb

omecvljytrqdhsizbnaku
udqhsrwziecvontbjyalmk
rziounkxcyhsetbdvljamq
dcvbnoeifhmujztykrqals
oyjivrleknaqutzcdsbmh

ojahsn
jcsnhoa
jxdnagle
rcnpbhja

zqt
zsqt
ztq

vhz
otkn

arvqefczkdbyptwhn
izhcpyvadbrtsfnkwqe
bwhzqckerydvnpfta

lega
gael
gjlae
lega
elga

sagqpktolcjnbxduvif
jraphlikcvofdtbngsxuq

ueapyvcxjzkmdtofwhbi
kxfntzweyojaudbhvcmip

esqtdbwny
ktihlxyozbepr

kptwgyqjlshinzcmfraoue
ecqfgzrmsnjoyuwbhptiak
fesyrhanczkopgiuqmwtj
htszfijegmapynoquwkcr
gpvuwrtoeqscxhfdnjkizyam

jupyabtgzqkenwxmdov
khpzbtidyxevwnfjqragmuo

nrjpulko
snepoclyku

lizpwtmqu
bsvrkjhdancye
noxyegsdcfvk

sbg
k
cz

a
a
a

xriamvkljbzeyqpg
lwbxpmygjizeavqkh
vaqizxjbkypglem
iybvglmzpekaxqj
plyqrzibjevgxakm

vuksrmtnxypfhqjd
rsnkhjydpxvmtqfu

kwzxnla
eibgtvqrpof

rlcvxobkwaigdtynu
trincuyxalmkowvgbd
gtwnuicvyloaxerkbd
ultgindkaevxrbcoyw

zeixf
zxeif

vxdztljhormq
mvjodztlrkx
orxdlvzjmt
ltoxvsmzdrj
lzpomjrdxtv

mdjpnelh
dhmpjeln
pedjhmln
epmnjlhd

l
e
g
k
egl

ntbzqkajovmluxfiwrhc
zlwjvhonifkqmtxcruba
twbckuareohvlzqmxfnj
lzhkrxudbmfvjtwnaopgcq

qtfswx
ftwsxq
wxtqfs

jdfrbvegyaxnkpzuqc
fxvrplchsnjzquig

ncdwaxzjpurlhvogiyk
iuyzanjhlkwgcvtpodx
njkvwoulacgdyphzxiq
oluejdmzhxvknfwgbapciy
wkuydhvzjlagpcniox

hwzt
htw
twenp

zyeaxcopib
mjygholnrwzxcp

hlcyaim
clmhya
lahmcyu
yalhmc
lhmcay

twiyljbdfpz
xwlzbfdyj
eybldmjfwz
bdezljnfwy

beokvws
bokevs
svkoxlbfe
emovtsbkyq
bxkovse

v
viczk
nv
vo

wioycgnlvb
gnzivbwl
bilvxgnmwt

tfryxampokhneblv
oyhmpbvknjlwtax
atcphobxykvlmn
lkyvnxpbamtho

lfq
mzfloh
flr
rtfkdlx

zob
ztobplj

agfhdxkitvezqupcmo
dmqfevwiacspouxzgkht
izchgpefqamtkvxduo

jshdzpmqy
psdyh
dshyp
sdhpy

wf
fw

obtyelgzwunkramj
ogzwbjtkauenrlmy
lratujbnowgkmeyz

kymsg
gnhw

zlwhvaxn
kciabjwq

fvupikynhtdzwcgomebjqras
raxifvbdpyuosjwhmtncekqzg

ifsz
waek

iyjeknxqbc
xkqibpyeac

ln
oln
ln
nl

nldwurygtea
hfkenyl
sfckenylvhq
xylqnce
lzpyevn

mrqjwyzdfpsk
szfrjpdqym

vqowkpxziunbrdhfgat
fblonvrwithaugpz
iwnaohtprvumzefgb
rfcaopswtjuhgnbivz
rfngzabviowtphu

uenzqimokwrcaxt
otemwixzrcguqa
qiufamzerotwxc
mropxcziqwtaeu

lbqtschfuxdo
bfcvdhqxtslgio
fchtzbxolsdq
xqldtfcsoheb
leocutxdhbqsf

ldoeanfmyprbujqgztsixwvhk
ahnflzogxyitbdwvmsqekpjru
ujeqmnofkltvryibsxwgdzpha

gjzm
gmvzj
zgjm
zgjm
jmzg

vtcadkes
nvyzpas
asdkv
fatsvd
vsa

esxdcznpbqfl
szdfplcvnbwrea
cxdnobpfezls

kfqazixnrcmep
xwdkquriylohfb
kruiqlhdvgfx
rqktxofviby
qkrdisxftlwb

uxbvmtedijgfq
rxwcnasiyvluzjgq

qryboljcgs
klsyqjmg
qfgytjsl
qkavjystelg

ihwaotvbldgjxp
wqcipsukoynfrez

f
j
f
f

dxky
dxyk
dxky
xdyk
ykdx

mfoswjcylnuqxzvtdgahr
ovwznrdhptsbxckuly

brxojtnefkhdqp
imwshgcuzyvjel

cyrzobudkxh
hixnbwkudzcpjr
gsqvhextflabdrm

ya
sfti
g

fezqityovsnbpglcwjx
jvxwdmtrspglykez

dizgh
ufvzlxsdah
ykpzirhdg
rzdgyjh

slgb
bgsl
kybwlg
bgl

ejknlhwxsmqvdizburay
khbvdusqrnmlzwjeia
jknvwrqzbhaisuelmd
ulivmajzknedqwsbrh
dzvbejqwlatkhnrimsu

c
iesu
myvr

zw
iphg

b
b
b

uvgqi
vgqui
uivgq

rapwh
wahpr
haprw
awhrp

nyhmewt
wemykn
wnmey

mwgtdrpha
yeorucslfkvxbqni

wb
xju

xvhibjznw
vmzhygtfiq

iklqa
qaliz
aqli

rjgvinpzwtumc
invuwpjtgzrmc
tpuijngovwmrz
mtcnwivgzrjup

yimhdz
ocgmjnvbaxdhq
mrhzd
rhmd
hymldz

xcsebkmal
bxefamks

fcahqgr
xaqg

ayiwouqbekslfmpx
sbilmeoxpyqkuaf
olyfiubapqemxsk
qiexlfpombayuks
poaxysfulmbieqk

clsjyio
jiozy
axjkoniy

uwzbjkct
ujkcwzbif

cdkguobtlpyjwfrzhem
zmtkjwdnohercvblaf
rdjhocwbltkzfme
tairjewbfhxdqlcmzko
rzkfocjmwthedibl

m
u
fie

hryqbcnxvtg
xeazwsumq

jmiaz
mbjzia
zmwaji

ajm
amj
autemjh
maj
pmja

qfpietdhbxy
qdahtybepzxi
ixqyhftpde
ihmywkrucjstdexqopl

enktj
vqgxdrs

gnkcevrabxsdlzoq
rqogvsbeladxcznk
kdscagezlorvxbqn
obnxaervsgzqlcdk
rnkzvxgesoqcdlab

kfngqdutbvxiaemc
dxmqecbauivnftg
udxaqicmvtnbgef

ranvgxdpe
ngvpde
epnxvgr
ywepngvu`;

const inStr7 = `light salmon bags contain 5 dark brown bags, 2 dotted coral bags, 5 mirrored turquoise bags.
drab magenta bags contain 1 vibrant purple bag, 5 dark lime bags, 2 clear silver bags.
striped coral bags contain 2 dim lime bags.
drab cyan bags contain 1 dark lime bag.
bright purple bags contain 5 posh salmon bags, 1 posh blue bag, 1 shiny lavender bag.
dull tomato bags contain 2 shiny maroon bags, 1 posh salmon bag, 4 posh teal bags, 5 dark orange bags.
faded aqua bags contain 3 striped salmon bags, 5 dim purple bags, 3 shiny gold bags, 4 drab indigo bags.
drab maroon bags contain 2 dark gray bags, 3 mirrored tan bags, 4 pale blue bags, 4 dim black bags.
posh blue bags contain 1 mirrored maroon bag, 4 striped lavender bags.
dull orange bags contain 2 light aqua bags, 2 striped chartreuse bags, 4 dim bronze bags.
vibrant fuchsia bags contain 1 clear orange bag, 1 plaid turquoise bag, 3 posh maroon bags, 4 light silver bags.
posh violet bags contain 5 plaid violet bags, 5 vibrant turquoise bags, 1 pale orange bag.
light gray bags contain 5 vibrant tan bags, 4 shiny tomato bags, 5 muted olive bags.
striped teal bags contain 2 drab cyan bags, 3 dull tomato bags, 1 light gold bag, 1 dark beige bag.
muted orange bags contain 3 pale blue bags, 1 muted coral bag.
wavy magenta bags contain 1 dotted crimson bag.
dark fuchsia bags contain 3 plaid yellow bags, 4 dim green bags.
drab beige bags contain 4 dull brown bags.
light olive bags contain 2 posh magenta bags, 4 dim crimson bags.
wavy chartreuse bags contain 3 plaid magenta bags.
dim cyan bags contain 4 light lime bags, 3 dim crimson bags, 1 striped green bag.
vibrant violet bags contain 2 dark teal bags, 5 vibrant turquoise bags.
drab tomato bags contain 2 vibrant salmon bags, 5 bright salmon bags.
mirrored lime bags contain 5 striped teal bags, 3 dim lavender bags, 4 dim cyan bags, 2 dotted green bags.
wavy plum bags contain 4 plaid magenta bags.
dim brown bags contain 1 dull yellow bag, 2 plaid beige bags.
posh magenta bags contain 4 vibrant turquoise bags.
posh maroon bags contain 3 dark teal bags, 2 striped plum bags.
pale magenta bags contain 4 dim chartreuse bags, 3 mirrored salmon bags.
shiny blue bags contain 2 shiny violet bags, 3 pale red bags, 5 pale salmon bags.
clear tan bags contain 3 wavy lavender bags.
pale bronze bags contain 3 muted chartreuse bags.
pale tomato bags contain 1 dotted brown bag, 1 posh lavender bag, 2 striped violet bags.
dotted lime bags contain 3 light magenta bags, 2 clear yellow bags, 3 faded olive bags.
shiny tan bags contain 2 dotted fuchsia bags, 5 dull crimson bags, 5 clear orange bags.
light lavender bags contain 3 shiny tomato bags, 5 drab beige bags, 3 mirrored yellow bags.
wavy bronze bags contain 2 muted green bags, 3 dotted bronze bags.
faded brown bags contain 3 drab gold bags, 3 dotted red bags, 1 dim white bag.
muted cyan bags contain 4 striped turquoise bags.
faded tan bags contain 1 muted red bag, 1 mirrored tan bag, 4 shiny purple bags.
dark violet bags contain 4 posh tomato bags.
posh purple bags contain 3 shiny violet bags, 4 clear indigo bags.
vibrant orange bags contain 1 dim salmon bag, 1 vibrant olive bag, 4 drab fuchsia bags.
dull blue bags contain 5 pale lavender bags, 3 dark lavender bags, 1 mirrored yellow bag.
muted white bags contain 3 dark salmon bags, 4 posh bronze bags, 5 pale plum bags.
striped lavender bags contain 4 faded plum bags, 2 dark tomato bags, 2 plaid teal bags.
dark gold bags contain 4 dark lime bags.
dull magenta bags contain 2 muted chartreuse bags.
striped cyan bags contain 4 dotted red bags, 3 drab lime bags.
dotted bronze bags contain 1 clear magenta bag, 2 bright salmon bags.
clear lavender bags contain 4 dim lime bags.
plaid salmon bags contain 2 dark orange bags.
posh silver bags contain 5 muted fuchsia bags, 4 muted crimson bags.
bright plum bags contain 3 vibrant salmon bags, 3 clear tan bags.
posh beige bags contain 3 mirrored lavender bags, 4 pale olive bags, 2 dotted black bags.
bright yellow bags contain 3 mirrored violet bags.
plaid green bags contain 5 striped black bags, 5 posh bronze bags, 5 mirrored teal bags.
plaid coral bags contain 5 plaid beige bags, 5 drab chartreuse bags.
dotted maroon bags contain 4 dotted indigo bags, 4 dotted coral bags.
dotted chartreuse bags contain 2 wavy turquoise bags, 2 posh indigo bags, 3 plaid silver bags, 2 mirrored salmon bags.
dark yellow bags contain 1 posh brown bag, 4 light tan bags, 2 clear fuchsia bags, 5 dotted black bags.
dull lavender bags contain 4 plaid green bags, 1 striped plum bag, 3 drab teal bags.
bright maroon bags contain 1 dotted tan bag, 4 light olive bags, 5 posh cyan bags.
vibrant gold bags contain 2 faded gold bags.
dim lavender bags contain 3 dark silver bags, 1 striped violet bag, 2 dotted bronze bags, 1 striped black bag.
light tomato bags contain 2 striped chartreuse bags.
dull yellow bags contain 5 drab tomato bags.
dotted coral bags contain 1 dark blue bag, 1 mirrored teal bag, 1 drab tomato bag.
pale lime bags contain 3 clear cyan bags, 5 pale silver bags, 4 wavy olive bags.
wavy red bags contain 3 vibrant gray bags, 4 shiny teal bags, 4 clear maroon bags.
pale beige bags contain 2 shiny teal bags, 2 posh fuchsia bags, 4 dark aqua bags, 4 posh orange bags.
striped tomato bags contain 2 light coral bags.
shiny violet bags contain 4 vibrant chartreuse bags, 3 wavy lavender bags.
plaid teal bags contain 3 mirrored teal bags.
clear black bags contain 2 faded beige bags, 4 faded tan bags, 1 light salmon bag, 5 wavy white bags.
clear yellow bags contain 2 dull tan bags, 5 plaid gold bags.
faded green bags contain 5 light brown bags.
bright coral bags contain 5 dotted teal bags, 2 mirrored gray bags, 3 wavy lime bags.
muted bronze bags contain 3 dim maroon bags, 3 shiny beige bags, 4 light bronze bags.
vibrant crimson bags contain 4 dim brown bags, 3 dotted maroon bags, 4 vibrant gold bags, 5 dull tomato bags.
pale green bags contain 4 plaid beige bags.
dull green bags contain 2 clear salmon bags, 2 dark bronze bags.
dotted tan bags contain 1 dim tan bag.
muted plum bags contain 3 faded crimson bags, 5 muted violet bags, 5 striped violet bags, 2 drab silver bags.
faded coral bags contain 2 dark plum bags, 1 muted cyan bag, 3 vibrant beige bags.
vibrant brown bags contain 4 striped maroon bags, 4 bright cyan bags.
drab coral bags contain 3 vibrant coral bags, 3 dark aqua bags.
striped chartreuse bags contain 2 vibrant salmon bags, 2 posh bronze bags, 3 drab teal bags.
bright indigo bags contain 4 faded plum bags.
clear olive bags contain 4 muted turquoise bags, 1 dotted olive bag.
drab yellow bags contain 1 dim brown bag, 4 plaid green bags, 2 posh red bags.
striped purple bags contain 2 mirrored orange bags, 4 vibrant chartreuse bags, 1 pale orange bag, 2 shiny green bags.
mirrored olive bags contain 1 faded gold bag, 1 vibrant chartreuse bag, 5 faded brown bags, 3 wavy indigo bags.
dull aqua bags contain 3 muted black bags, 2 muted orange bags, 2 pale lime bags, 4 dark plum bags.
light lime bags contain 5 plaid beige bags, 5 shiny gold bags, 3 plaid plum bags.
vibrant beige bags contain 2 posh maroon bags, 3 dotted plum bags.
mirrored yellow bags contain 4 dotted crimson bags, 3 drab olive bags, 1 faded bronze bag, 2 striped violet bags.
mirrored plum bags contain 4 dotted gray bags, 1 striped fuchsia bag, 3 dim yellow bags.
faded beige bags contain 5 striped chartreuse bags, 3 faded bronze bags, 3 dark lime bags.
drab crimson bags contain 2 dull green bags, 1 muted teal bag.
shiny salmon bags contain 3 wavy olive bags, 1 faded crimson bag, 1 clear chartreuse bag.
vibrant turquoise bags contain 4 drab black bags.
dim yellow bags contain 5 shiny blue bags.
wavy maroon bags contain 5 pale brown bags.
dark coral bags contain 2 bright teal bags, 3 bright green bags, 3 drab coral bags.
bright beige bags contain 3 faded salmon bags, 5 plaid coral bags.
posh gray bags contain 5 bright silver bags, 1 pale brown bag.
plaid orange bags contain 3 faded olive bags, 4 muted fuchsia bags, 5 vibrant turquoise bags.
faded indigo bags contain 1 muted silver bag, 3 dim green bags, 3 faded purple bags, 1 plaid beige bag.
drab lavender bags contain 5 light blue bags.
light coral bags contain 3 pale orange bags, 2 plaid teal bags.
posh indigo bags contain 2 drab olive bags, 2 dim cyan bags, 2 light teal bags.
muted fuchsia bags contain 2 wavy white bags, 1 dark tan bag.
muted brown bags contain 5 drab coral bags, 4 dull brown bags, 4 mirrored black bags.
bright aqua bags contain 3 clear orange bags.
faded magenta bags contain 1 striped violet bag, 1 dull lavender bag.
clear brown bags contain 4 mirrored green bags, 1 clear fuchsia bag, 2 vibrant violet bags, 1 shiny aqua bag.
clear green bags contain 3 dotted brown bags, 2 faded plum bags, 3 dotted beige bags, 2 striped brown bags.
dull violet bags contain 2 vibrant violet bags, 4 light coral bags, 3 clear black bags.
light gold bags contain no other bags.
striped silver bags contain 4 clear bronze bags, 1 striped plum bag, 3 dull yellow bags.
dull indigo bags contain 5 wavy olive bags, 3 shiny tomato bags, 3 vibrant lime bags, 4 dark beige bags.
dark teal bags contain 2 dark blue bags, 4 mirrored teal bags, 4 posh bronze bags, 1 muted gold bag.
light cyan bags contain 3 drab olive bags, 2 plaid teal bags, 5 vibrant indigo bags.
clear turquoise bags contain 3 bright teal bags.
clear white bags contain 4 faded black bags.
plaid olive bags contain 3 vibrant blue bags, 5 posh gold bags.
drab turquoise bags contain 3 striped black bags, 1 dull brown bag, 5 dark lime bags.
plaid tomato bags contain 1 dim orange bag.
wavy lime bags contain 3 muted crimson bags, 2 shiny green bags.
dim salmon bags contain 4 faded black bags, 4 mirrored teal bags, 4 drab tomato bags, 2 vibrant green bags.
pale lavender bags contain 2 striped violet bags.
pale violet bags contain 5 dim magenta bags, 1 muted cyan bag, 5 clear red bags, 2 pale fuchsia bags.
dark purple bags contain 2 light red bags.
drab blue bags contain 2 dark blue bags, 2 dotted bronze bags, 4 bright teal bags.
wavy white bags contain 3 dim red bags, 1 vibrant chartreuse bag, 3 muted gray bags.
muted beige bags contain 1 shiny purple bag.
dim aqua bags contain 1 muted yellow bag, 3 drab green bags, 2 plaid magenta bags.
pale orange bags contain 5 mirrored teal bags, 4 dark aqua bags, 5 shiny gold bags.
clear coral bags contain 5 dark white bags, 5 light blue bags.
shiny orange bags contain 3 vibrant black bags, 2 pale purple bags, 2 drab salmon bags, 5 light blue bags.
wavy gray bags contain 3 bright red bags, 3 plaid yellow bags, 1 muted cyan bag, 1 plaid maroon bag.
plaid chartreuse bags contain 3 dotted brown bags, 3 pale lime bags.
shiny green bags contain 1 muted blue bag, 4 dull blue bags, 5 mirrored lavender bags, 1 posh coral bag.
faded black bags contain 4 posh bronze bags, 5 vibrant coral bags, 1 plaid teal bag.
wavy yellow bags contain 5 mirrored indigo bags, 4 clear salmon bags, 2 bright tomato bags.
plaid gold bags contain 5 vibrant violet bags, 4 faded violet bags.
striped maroon bags contain 2 dark aqua bags, 3 mirrored teal bags.
plaid white bags contain 3 mirrored green bags.
dim gray bags contain 1 drab cyan bag, 1 plaid plum bag.
light aqua bags contain 4 pale olive bags, 1 dark olive bag, 1 wavy black bag, 3 drab lime bags.
dim tan bags contain 4 dark teal bags.
mirrored fuchsia bags contain 4 posh lavender bags, 1 drab coral bag, 1 faded white bag.
bright tomato bags contain 4 faded beige bags.
dim plum bags contain 3 striped yellow bags, 1 mirrored maroon bag, 4 shiny gray bags, 5 bright plum bags.
bright white bags contain 5 shiny lavender bags, 1 drab salmon bag.
pale gold bags contain 2 faded olive bags.
plaid red bags contain 4 plaid aqua bags, 3 pale brown bags.
striped violet bags contain no other bags.
pale white bags contain 5 faded silver bags, 3 drab silver bags, 1 mirrored white bag, 1 muted violet bag.
posh bronze bags contain 4 pale brown bags.
dull black bags contain 5 vibrant chartreuse bags, 3 striped indigo bags, 2 drab fuchsia bags, 1 vibrant gold bag.
light indigo bags contain 1 light green bag, 3 striped silver bags.
mirrored indigo bags contain 5 pale tan bags, 5 plaid plum bags, 3 wavy aqua bags, 5 drab violet bags.
clear cyan bags contain 5 drab teal bags.
clear orange bags contain 5 mirrored purple bags.
clear gray bags contain 1 wavy brown bag, 5 drab teal bags, 5 muted coral bags.
striped green bags contain no other bags.
plaid black bags contain 5 dim yellow bags, 4 mirrored blue bags, 5 plaid plum bags, 1 striped aqua bag.
wavy violet bags contain 2 clear brown bags, 5 mirrored silver bags, 5 vibrant silver bags.
dotted olive bags contain 1 posh bronze bag, 5 striped violet bags.
drab green bags contain 1 posh orange bag, 1 clear chartreuse bag.
dotted red bags contain 3 striped plum bags, 2 bright crimson bags.
dim turquoise bags contain 4 striped bronze bags, 3 light plum bags.
wavy green bags contain 3 drab fuchsia bags, 3 shiny brown bags.
wavy gold bags contain 4 mirrored violet bags.
dark magenta bags contain 3 faded silver bags.
shiny silver bags contain 2 muted orange bags, 2 dull indigo bags, 1 vibrant magenta bag, 3 shiny aqua bags.
pale purple bags contain 1 dark cyan bag, 2 pale brown bags, 3 light silver bags, 1 plaid aqua bag.
pale silver bags contain 2 pale red bags, 2 striped chartreuse bags, 3 faded bronze bags.
vibrant olive bags contain 5 drab turquoise bags, 4 wavy olive bags, 5 plaid beige bags.
wavy coral bags contain 1 clear orange bag.
faded gold bags contain 4 mirrored turquoise bags, 5 dim gray bags, 1 faded bronze bag.
vibrant gray bags contain 3 light tan bags, 5 plaid teal bags, 5 dotted olive bags.
drab aqua bags contain 1 dotted olive bag, 5 dark indigo bags, 3 pale fuchsia bags.
vibrant indigo bags contain 4 pale coral bags, 1 clear green bag, 1 dim chartreuse bag, 5 mirrored turquoise bags.
dotted teal bags contain 5 clear indigo bags, 1 faded bronze bag.
muted salmon bags contain 1 light teal bag, 1 light cyan bag, 3 muted crimson bags.
shiny fuchsia bags contain 1 wavy brown bag, 3 plaid green bags, 2 shiny silver bags.
dark tan bags contain 5 dotted plum bags, 3 striped orange bags, 4 faded gold bags, 4 mirrored turquoise bags.
bright crimson bags contain 5 bright salmon bags, 4 clear salmon bags, 2 faded bronze bags.
clear silver bags contain 3 striped purple bags.
faded yellow bags contain 2 striped turquoise bags, 4 pale purple bags, 5 wavy aqua bags, 3 posh gold bags.
muted gray bags contain no other bags.
light purple bags contain 2 wavy indigo bags, 1 dark white bag, 1 faded beige bag.
clear fuchsia bags contain 2 drab violet bags, 5 drab black bags, 4 shiny tomato bags.
wavy blue bags contain 3 faded beige bags, 2 plaid coral bags.
faded crimson bags contain 4 dark lime bags, 1 striped chartreuse bag.
bright lavender bags contain 5 plaid green bags, 3 striped turquoise bags, 2 dotted black bags.
faded lavender bags contain 5 plaid magenta bags.
dull turquoise bags contain 5 posh bronze bags, 4 dark white bags.
mirrored tan bags contain 4 vibrant white bags.
pale teal bags contain 4 pale aqua bags, 1 shiny maroon bag, 5 vibrant silver bags.
wavy black bags contain 3 dotted teal bags, 1 pale green bag, 5 drab blue bags, 5 dotted coral bags.
shiny turquoise bags contain 2 muted gray bags, 4 dark white bags.
vibrant white bags contain 4 shiny tomato bags.
pale tan bags contain 5 plaid coral bags.
striped white bags contain 3 light cyan bags, 4 mirrored orange bags, 2 dotted brown bags.
dark lime bags contain 1 light gold bag, 1 dotted green bag, 4 dotted brown bags, 1 shiny gold bag.
dim coral bags contain 1 posh black bag, 3 faded coral bags.
shiny crimson bags contain 1 mirrored tan bag.
drab teal bags contain 2 mirrored turquoise bags, 4 vibrant chartreuse bags, 4 mirrored teal bags, 4 light gold bags.
dotted plum bags contain 5 faded bronze bags, 5 vibrant blue bags.
faded tomato bags contain 1 dark aqua bag, 1 striped green bag.
faded red bags contain 2 bright gold bags, 1 clear gray bag.
faded olive bags contain 3 dotted plum bags, 1 dotted coral bag, 3 dim indigo bags, 2 dull tan bags.
dotted black bags contain 1 drab fuchsia bag, 3 dotted bronze bags, 1 pale orange bag, 5 dull salmon bags.
plaid turquoise bags contain 5 drab turquoise bags, 5 plaid violet bags, 4 posh maroon bags.
pale plum bags contain 5 bright chartreuse bags, 5 shiny brown bags.
dull gray bags contain 5 light yellow bags.
dark tomato bags contain 4 mirrored teal bags, 4 clear magenta bags, 1 striped green bag, 1 muted gray bag.
light bronze bags contain 5 muted tan bags, 5 drab maroon bags, 3 dim crimson bags, 2 dull turquoise bags.
dull silver bags contain 1 muted gray bag, 2 posh purple bags.
shiny gray bags contain 2 faded plum bags, 2 striped turquoise bags.
vibrant black bags contain 3 light salmon bags, 3 drab maroon bags.
mirrored silver bags contain 1 plaid beige bag, 3 dim lime bags, 4 dotted brown bags.
posh tomato bags contain 4 plaid white bags, 2 plaid plum bags.
mirrored brown bags contain 5 faded white bags, 2 posh white bags, 5 dark plum bags.
muted yellow bags contain 2 pale yellow bags, 5 posh salmon bags, 1 bright red bag, 1 plaid beige bag.
dull coral bags contain 5 drab white bags, 2 wavy silver bags, 2 light olive bags.
shiny brown bags contain 5 dotted coral bags, 2 dotted brown bags, 2 drab chartreuse bags.
light fuchsia bags contain 3 striped plum bags, 4 dark brown bags, 4 dim lime bags.
bright cyan bags contain 2 shiny violet bags, 1 dark white bag, 2 drab chartreuse bags, 2 dim fuchsia bags.
dotted orange bags contain 4 mirrored black bags, 2 wavy maroon bags, 3 vibrant violet bags.
pale blue bags contain 5 drab cyan bags, 3 plaid green bags, 3 pale red bags, 2 dim crimson bags.
dim red bags contain 2 dark blue bags, 3 muted red bags, 1 striped violet bag, 2 dotted coral bags.
posh plum bags contain 1 wavy silver bag, 3 dark beige bags, 1 dotted gray bag.
drab orange bags contain 5 muted salmon bags, 1 clear crimson bag.
dotted purple bags contain 1 dull yellow bag, 1 vibrant green bag, 4 clear bronze bags.
shiny chartreuse bags contain 4 shiny tomato bags.
shiny maroon bags contain 3 dull lavender bags.
clear magenta bags contain no other bags.
pale cyan bags contain no other bags.
dim olive bags contain 1 striped plum bag, 2 light maroon bags, 5 plaid olive bags, 4 dim violet bags.
faded chartreuse bags contain 5 wavy salmon bags, 5 dull bronze bags, 1 dull silver bag.
posh coral bags contain 3 faded white bags.
dark beige bags contain 3 dim indigo bags, 4 dull tomato bags, 2 muted crimson bags, 2 drab chartreuse bags.
wavy salmon bags contain 4 pale red bags, 3 dull fuchsia bags.
dim magenta bags contain 1 muted fuchsia bag, 5 vibrant violet bags.
faded gray bags contain 5 faded tomato bags, 4 posh violet bags, 2 shiny white bags, 2 dark tomato bags.
light turquoise bags contain 2 dark magenta bags.
dark maroon bags contain 2 clear magenta bags, 4 clear indigo bags.
faded turquoise bags contain 2 vibrant turquoise bags, 1 dim turquoise bag.
dull bronze bags contain 4 mirrored salmon bags, 5 bright plum bags.
posh yellow bags contain 2 vibrant coral bags, 5 dotted coral bags.
drab olive bags contain 5 clear salmon bags.
clear plum bags contain 5 shiny beige bags, 3 vibrant tan bags, 1 clear green bag, 1 dull orange bag.
shiny white bags contain 2 striped lime bags, 2 wavy turquoise bags, 4 pale purple bags, 3 vibrant gray bags.
drab gray bags contain 2 dim chartreuse bags.
light silver bags contain 1 faded fuchsia bag, 1 pale aqua bag, 4 dim green bags.
wavy beige bags contain 4 light tan bags, 5 dark brown bags.
light red bags contain 1 striped plum bag, 3 dark coral bags, 5 striped crimson bags, 5 pale indigo bags.
clear blue bags contain 3 dotted bronze bags, 2 striped chartreuse bags.
dull plum bags contain 3 mirrored coral bags, 1 shiny violet bag, 3 wavy magenta bags, 1 bright crimson bag.
drab fuchsia bags contain 1 dotted bronze bag, 2 vibrant salmon bags, 1 pale turquoise bag, 4 shiny gold bags.
muted gold bags contain 5 dark blue bags, 4 light gold bags.
posh black bags contain 2 wavy beige bags, 1 bright plum bag.
drab purple bags contain 5 muted white bags.
light teal bags contain 5 dull yellow bags, 1 light gold bag.
mirrored teal bags contain no other bags.
mirrored maroon bags contain 5 faded yellow bags, 5 faded gold bags.
dull olive bags contain 4 posh brown bags, 4 muted purple bags, 2 dim beige bags, 5 wavy black bags.
wavy tomato bags contain 1 drab beige bag, 3 vibrant tan bags.
vibrant silver bags contain 3 striped bronze bags, 2 dotted green bags, 4 dull brown bags, 2 muted gray bags.
dark lavender bags contain 2 plaid maroon bags, 1 vibrant blue bag, 5 striped black bags, 1 light teal bag.
mirrored white bags contain 3 posh magenta bags.
wavy aqua bags contain 4 pale silver bags.
wavy orange bags contain 3 drab bronze bags, 3 muted olive bags.
drab violet bags contain 1 vibrant turquoise bag, 5 dull yellow bags, 1 faded white bag.
light crimson bags contain 1 light tan bag, 3 bright teal bags, 5 bright crimson bags.
muted black bags contain 3 drab salmon bags, 1 clear blue bag, 5 wavy lavender bags.
faded salmon bags contain 1 vibrant magenta bag.
wavy brown bags contain 2 posh maroon bags.
posh salmon bags contain 5 wavy brown bags, 5 shiny brown bags, 2 dark lime bags.
posh chartreuse bags contain 3 wavy green bags, 3 drab maroon bags, 5 wavy violet bags, 3 clear turquoise bags.
muted coral bags contain 3 vibrant tan bags, 1 bright tomato bag, 1 vibrant salmon bag, 5 light green bags.
light black bags contain 4 bright olive bags.
light white bags contain 5 pale lavender bags.
striped aqua bags contain 5 dim gray bags.
dark brown bags contain 1 dim lavender bag, 5 wavy maroon bags.
drab tan bags contain 5 striped gray bags, 2 mirrored fuchsia bags, 5 dark maroon bags.
dim violet bags contain 2 bright olive bags, 3 bright indigo bags, 2 faded bronze bags, 4 drab blue bags.
light tan bags contain 2 wavy green bags, 3 posh maroon bags, 2 striped black bags.
posh brown bags contain 1 bright cyan bag, 4 wavy gray bags.
dotted white bags contain 1 faded black bag, 2 clear green bags.
shiny tomato bags contain 3 wavy lavender bags, 2 dotted brown bags, 5 plaid plum bags, 1 striped orange bag.
dotted silver bags contain 5 dotted tan bags, 3 wavy magenta bags, 2 pale plum bags.
shiny lime bags contain 2 drab white bags, 5 posh cyan bags.
pale fuchsia bags contain 2 wavy yellow bags, 1 wavy magenta bag, 4 dull black bags, 2 dotted tan bags.
dotted crimson bags contain 5 dark blue bags.
bright salmon bags contain 3 light gold bags, 4 clear magenta bags, 4 mirrored turquoise bags.
striped brown bags contain 3 mirrored turquoise bags, 4 striped green bags.
clear crimson bags contain 4 light violet bags, 3 muted yellow bags, 2 muted salmon bags, 1 dull brown bag.
plaid silver bags contain 5 bright teal bags.
striped black bags contain 4 dark silver bags, 2 clear salmon bags, 2 dotted green bags, 5 muted gold bags.
muted lime bags contain 5 dotted indigo bags, 4 striped lime bags, 2 dark lavender bags.
bright red bags contain 2 pale turquoise bags, 2 posh purple bags.
dotted violet bags contain 4 posh indigo bags, 5 light aqua bags, 5 dark plum bags.
wavy crimson bags contain 3 dim white bags, 2 vibrant green bags, 3 mirrored green bags, 5 muted magenta bags.
bright brown bags contain 2 light tan bags, 5 dull coral bags, 1 muted tan bag, 2 striped purple bags.
muted violet bags contain 2 vibrant coral bags, 4 dotted green bags.
dim indigo bags contain 1 bright crimson bag, 3 dotted brown bags.
bright tan bags contain 1 muted chartreuse bag, 5 dull chartreuse bags, 2 muted cyan bags.
drab brown bags contain 1 drab teal bag, 1 pale lavender bag, 3 clear violet bags, 4 muted blue bags.
dark plum bags contain 5 dotted bronze bags, 1 plaid maroon bag, 4 faded gold bags.
drab indigo bags contain 1 wavy brown bag, 5 light lime bags, 3 drab blue bags.
light beige bags contain 5 dim crimson bags, 3 dull black bags, 5 muted black bags.
mirrored black bags contain 4 drab olive bags, 3 dark lavender bags.
clear beige bags contain 3 dark lavender bags, 3 muted fuchsia bags, 5 dull blue bags.
dark bronze bags contain 3 dim lavender bags, 2 vibrant magenta bags, 1 striped silver bag, 5 faded beige bags.
mirrored gold bags contain 5 pale gold bags, 5 dotted green bags, 4 posh bronze bags.
bright turquoise bags contain 1 striped indigo bag, 2 muted purple bags, 5 shiny tomato bags, 3 dotted brown bags.
dark red bags contain 2 striped purple bags, 4 clear brown bags, 2 striped cyan bags.
muted aqua bags contain 2 dark tan bags, 5 clear orange bags, 5 clear fuchsia bags.
shiny plum bags contain 2 dark tan bags.
faded plum bags contain 4 clear blue bags, 1 dim lime bag, 2 striped brown bags.
light brown bags contain 3 posh gold bags, 5 muted turquoise bags.
mirrored blue bags contain 2 muted lime bags, 3 plaid blue bags, 2 plaid magenta bags, 4 dim gold bags.
dark cyan bags contain 5 wavy olive bags, 5 plaid teal bags.
dark turquoise bags contain 5 muted lime bags, 3 muted gold bags, 3 light lime bags, 4 vibrant beige bags.
posh cyan bags contain 4 clear indigo bags, 4 faded tomato bags, 2 plaid teal bags, 3 muted red bags.
plaid purple bags contain 3 dark teal bags, 3 drab coral bags, 2 posh lavender bags.
faded fuchsia bags contain 4 muted cyan bags, 1 vibrant violet bag, 4 bright red bags.
bright silver bags contain 3 mirrored black bags.
muted tomato bags contain 2 posh olive bags.
clear salmon bags contain 5 dark aqua bags.
posh lime bags contain 2 dim crimson bags, 4 clear aqua bags.
dotted turquoise bags contain 4 dotted lime bags, 4 dotted red bags, 3 dark coral bags, 4 striped gold bags.
posh olive bags contain 3 plaid green bags.
dotted cyan bags contain 1 wavy silver bag, 2 pale red bags.
mirrored violet bags contain 4 dark salmon bags, 4 plaid magenta bags.
wavy lavender bags contain 1 clear chartreuse bag.
shiny yellow bags contain 4 dotted indigo bags.
posh lavender bags contain 2 striped chartreuse bags.
pale maroon bags contain 5 posh lavender bags, 4 plaid teal bags, 3 posh turquoise bags, 2 plaid green bags.
plaid maroon bags contain 4 pale cyan bags, 2 bright teal bags, 1 striped plum bag, 2 plaid teal bags.
faded orange bags contain 5 drab turquoise bags, 5 dull bronze bags.
clear gold bags contain 5 wavy lime bags, 4 light maroon bags, 2 muted fuchsia bags, 4 dark salmon bags.
dark green bags contain 1 striped violet bag, 1 dim crimson bag.
mirrored tomato bags contain 1 clear red bag, 4 dull indigo bags.
striped magenta bags contain 5 shiny plum bags, 4 mirrored crimson bags, 4 dull plum bags.
plaid fuchsia bags contain 1 striped indigo bag, 5 drab gray bags.
clear violet bags contain 1 wavy green bag, 4 dull lavender bags, 2 drab black bags, 5 dim salmon bags.
bright chartreuse bags contain 3 clear salmon bags, 5 dim bronze bags, 3 dark lime bags, 3 pale cyan bags.
faded purple bags contain 4 dark lavender bags, 4 pale fuchsia bags.
mirrored aqua bags contain 4 faded black bags, 5 dim gold bags, 1 mirrored gray bag.
dotted blue bags contain 2 bright salmon bags, 5 drab fuchsia bags, 2 shiny gold bags.
shiny gold bags contain 4 clear magenta bags, 3 mirrored turquoise bags, 2 plaid maroon bags, 5 bright crimson bags.
pale olive bags contain 3 striped green bags.
vibrant red bags contain 1 faded violet bag, 4 shiny yellow bags, 4 wavy coral bags.
plaid indigo bags contain 4 striped salmon bags, 4 clear turquoise bags, 2 dotted tomato bags.
posh green bags contain 1 dark brown bag, 4 dotted black bags.
shiny beige bags contain 4 dotted teal bags.
faded white bags contain 5 muted violet bags, 4 dotted blue bags, 2 dull lavender bags, 4 bright teal bags.
plaid yellow bags contain 1 mirrored yellow bag, 3 striped violet bags, 2 striped silver bags.
drab plum bags contain 4 dim indigo bags, 5 clear cyan bags.
muted purple bags contain 3 dark white bags.
plaid blue bags contain 1 striped chartreuse bag, 1 light white bag.
plaid tan bags contain 1 wavy chartreuse bag.
muted magenta bags contain 4 striped turquoise bags, 5 clear lime bags.
striped olive bags contain 3 drab black bags.
faded lime bags contain 4 pale black bags.
faded silver bags contain 2 pale magenta bags, 2 posh olive bags, 2 muted fuchsia bags.
bright orange bags contain 5 muted gray bags, 4 clear black bags.
wavy indigo bags contain 3 dull white bags, 3 pale brown bags, 3 dotted brown bags.
pale indigo bags contain 1 vibrant chartreuse bag, 5 dotted red bags.
dark olive bags contain 5 faded gold bags.
pale gray bags contain 3 striped chartreuse bags, 3 striped plum bags.
dull maroon bags contain 1 plaid yellow bag, 3 muted red bags.
mirrored turquoise bags contain no other bags.
dull lime bags contain 3 muted red bags.
posh aqua bags contain 4 pale beige bags.
mirrored lavender bags contain 1 striped maroon bag, 4 dark plum bags, 1 mirrored black bag, 2 shiny tomato bags.
muted teal bags contain 5 faded silver bags.
muted olive bags contain 4 pale tomato bags.
vibrant teal bags contain 3 posh gold bags, 1 striped orange bag, 4 vibrant aqua bags, 5 wavy tan bags.
bright black bags contain 2 striped lavender bags, 5 drab coral bags, 5 clear gray bags.
plaid brown bags contain 3 striped plum bags.
vibrant tan bags contain 2 posh maroon bags, 3 plaid yellow bags, 1 muted green bag.
dark salmon bags contain 4 plaid violet bags.
plaid violet bags contain 1 mirrored teal bag.
striped beige bags contain 5 mirrored blue bags.
vibrant maroon bags contain 5 drab olive bags, 2 plaid green bags, 3 striped plum bags, 5 mirrored coral bags.
clear indigo bags contain 1 dim fuchsia bag, 3 dull turquoise bags.
clear teal bags contain 5 muted violet bags.
bright fuchsia bags contain 3 vibrant indigo bags, 3 drab silver bags, 5 pale tan bags.
dark chartreuse bags contain 2 posh maroon bags, 1 dotted beige bag, 3 dotted silver bags.
drab white bags contain 1 vibrant coral bag, 3 striped orange bags, 4 striped green bags, 1 dim salmon bag.
clear lime bags contain 5 dotted coral bags, 2 dim bronze bags, 2 dotted bronze bags.
shiny bronze bags contain 4 muted violet bags.
vibrant coral bags contain 4 striped chartreuse bags.
drab bronze bags contain 3 posh maroon bags, 2 vibrant white bags, 5 pale lavender bags.
posh teal bags contain 5 dark tomato bags, 1 clear magenta bag, 5 posh salmon bags, 1 shiny tomato bag.
mirrored bronze bags contain 1 mirrored maroon bag.
dim orange bags contain 1 dim beige bag, 4 striped maroon bags.
muted silver bags contain 3 shiny black bags, 4 drab yellow bags.
bright lime bags contain 2 clear fuchsia bags, 2 striped maroon bags.
vibrant bronze bags contain 4 drab olive bags, 3 plaid fuchsia bags, 5 pale gold bags, 4 mirrored orange bags.
bright violet bags contain 1 bright red bag, 3 dull lime bags.
mirrored orange bags contain 1 dotted indigo bag, 3 wavy lavender bags, 2 light teal bags, 1 drab chartreuse bag.
dull tan bags contain 2 muted green bags.
dotted tomato bags contain 2 dull magenta bags, 2 plaid cyan bags.
faded violet bags contain 1 dark cyan bag, 2 light tomato bags, 2 vibrant green bags, 3 posh gray bags.
shiny cyan bags contain 2 faded red bags, 2 striped beige bags, 5 mirrored coral bags, 2 shiny tomato bags.
plaid gray bags contain 1 posh teal bag, 5 drab turquoise bags.
dotted gold bags contain 1 faded violet bag, 3 vibrant lavender bags.
faded maroon bags contain 1 posh red bag, 2 plaid violet bags, 1 vibrant magenta bag.
dim tomato bags contain 3 vibrant yellow bags.
muted red bags contain 4 striped violet bags, 3 plaid turquoise bags.
striped turquoise bags contain 1 drab coral bag, 4 plaid maroon bags, 4 drab violet bags, 5 drab silver bags.
clear bronze bags contain no other bags.
drab gold bags contain 5 clear indigo bags, 2 light purple bags, 1 faded gold bag, 1 muted gray bag.
dotted beige bags contain 1 striped bronze bag, 4 plaid maroon bags, 3 dotted green bags.
posh orange bags contain 3 mirrored fuchsia bags, 5 wavy olive bags, 5 shiny tomato bags, 4 pale orange bags.
striped orange bags contain 1 pale brown bag.
wavy olive bags contain 3 striped bronze bags.
vibrant lime bags contain 1 dotted red bag, 1 vibrant tan bag, 2 striped turquoise bags, 1 mirrored plum bag.
wavy turquoise bags contain 1 muted cyan bag.
bright bronze bags contain 5 bright blue bags, 1 pale red bag, 5 shiny blue bags.
bright green bags contain 4 dim brown bags, 5 dotted blue bags.
light orange bags contain 4 dark blue bags.
shiny coral bags contain 1 mirrored gray bag, 2 drab fuchsia bags.
mirrored magenta bags contain 2 muted gray bags, 3 shiny tomato bags, 2 drab plum bags.
mirrored purple bags contain 3 dull turquoise bags, 1 dotted coral bag, 4 plaid violet bags, 1 drab fuchsia bag.
vibrant blue bags contain 1 faded tomato bag, 3 dark blue bags.
vibrant salmon bags contain 1 mirrored teal bag, 4 dark blue bags, 1 vibrant chartreuse bag.
vibrant lavender bags contain 5 dotted beige bags, 1 striped silver bag, 2 dull tan bags.
dark gray bags contain 5 wavy maroon bags, 5 bright teal bags.
pale crimson bags contain 1 plaid beige bag, 4 posh gold bags.
shiny indigo bags contain 4 dull green bags.
shiny aqua bags contain 3 posh magenta bags.
pale chartreuse bags contain 4 muted crimson bags.
mirrored coral bags contain 5 bright salmon bags, 3 striped bronze bags.
dotted fuchsia bags contain 5 dark black bags.
vibrant magenta bags contain 3 striped black bags, 5 drab tomato bags, 3 light lime bags.
plaid lavender bags contain 1 drab salmon bag.
muted lavender bags contain 2 faded gold bags.
dim lime bags contain 2 faded beige bags.
dim white bags contain 5 shiny violet bags.
striped bronze bags contain 4 dark aqua bags, 4 clear salmon bags.
pale aqua bags contain 5 muted chartreuse bags, 2 dull brown bags.
plaid aqua bags contain 2 striped turquoise bags, 3 mirrored fuchsia bags.
mirrored crimson bags contain 3 pale brown bags, 4 mirrored teal bags, 4 wavy maroon bags.
dotted indigo bags contain 3 drab tomato bags.
dim crimson bags contain 1 striped chartreuse bag.
mirrored cyan bags contain 4 striped fuchsia bags, 5 drab gold bags, 2 mirrored tan bags, 2 clear magenta bags.
drab black bags contain 5 dark blue bags, 4 striped green bags.
striped blue bags contain 3 clear white bags, 4 vibrant yellow bags, 4 faded blue bags.
mirrored salmon bags contain 4 dotted maroon bags, 3 dotted green bags, 2 dim lavender bags.
striped red bags contain 3 bright fuchsia bags, 3 dull black bags, 4 pale indigo bags, 3 vibrant gold bags.
pale red bags contain 1 plaid plum bag, 5 dark silver bags, 3 dull lavender bags.
dim purple bags contain 2 vibrant olive bags.
dotted aqua bags contain 5 muted cyan bags.
dull red bags contain 5 dull salmon bags, 5 dotted brown bags, 4 plaid coral bags, 2 wavy green bags.
clear chartreuse bags contain 5 wavy maroon bags, 4 dotted purple bags, 3 dark gray bags, 5 pale brown bags.
shiny red bags contain 3 dim green bags.
light violet bags contain 3 dull coral bags.
muted tan bags contain 1 dull turquoise bag.
dull gold bags contain 3 drab fuchsia bags, 5 pale orange bags.
dull teal bags contain 2 posh olive bags, 3 dark yellow bags, 5 dull magenta bags, 2 dotted tan bags.
plaid crimson bags contain 4 vibrant crimson bags, 1 pale tomato bag, 1 posh silver bag.
clear tomato bags contain 4 striped silver bags, 3 wavy gray bags.
dull fuchsia bags contain 4 vibrant violet bags, 1 dim bronze bag, 2 dim cyan bags.
pale brown bags contain 1 mirrored teal bag, 2 mirrored turquoise bags, 5 striped green bags.
plaid cyan bags contain 5 pale maroon bags, 4 drab salmon bags, 3 pale magenta bags.
drab lime bags contain 4 muted tan bags, 1 faded crimson bag, 4 wavy maroon bags, 1 vibrant green bag.
bright olive bags contain 2 vibrant brown bags, 3 pale silver bags.
posh crimson bags contain 5 mirrored turquoise bags, 1 pale gray bag, 4 bright silver bags.
mirrored green bags contain 4 dotted indigo bags, 5 muted magenta bags, 2 muted blue bags, 4 drab turquoise bags.
striped tan bags contain 4 dull turquoise bags, 3 bright indigo bags, 5 pale red bags.
dim chartreuse bags contain 2 mirrored turquoise bags, 3 dotted beige bags.
posh fuchsia bags contain 1 drab salmon bag, 4 striped orange bags, 4 dark olive bags.
faded bronze bags contain 5 bright salmon bags.
dotted green bags contain 3 dark blue bags.
dim silver bags contain 2 bright beige bags, 3 pale coral bags.
muted green bags contain 3 dim brown bags, 4 clear bronze bags, 2 bright teal bags.
clear maroon bags contain 4 posh salmon bags.
vibrant chartreuse bags contain 2 dark blue bags.
posh gold bags contain 4 shiny gold bags, 5 dark teal bags.
light chartreuse bags contain 4 faded silver bags, 2 light yellow bags.
faded cyan bags contain 3 muted silver bags, 4 vibrant bronze bags, 1 dotted orange bag.
dotted salmon bags contain 2 mirrored purple bags, 2 light teal bags, 2 mirrored lavender bags.
plaid plum bags contain 3 dotted bronze bags, 5 bright salmon bags, 2 light gold bags, 4 drab teal bags.
dull salmon bags contain 4 muted green bags, 4 dim indigo bags, 1 faded tomato bag, 3 faded gold bags.
muted maroon bags contain 4 faded bronze bags, 3 dull salmon bags, 4 dull turquoise bags.
light maroon bags contain 5 plaid blue bags, 2 bright gray bags, 4 vibrant chartreuse bags, 3 dark indigo bags.
dark white bags contain 4 striped bronze bags.
posh turquoise bags contain 4 plaid gray bags, 1 dim indigo bag.
dark indigo bags contain 3 dull chartreuse bags, 2 shiny salmon bags, 1 muted magenta bag, 1 dotted indigo bag.
wavy silver bags contain 1 dotted salmon bag, 1 pale gray bag, 5 plaid turquoise bags.
pale black bags contain 5 dark olive bags.
mirrored beige bags contain 4 dim purple bags.
shiny black bags contain 2 mirrored turquoise bags, 5 pale silver bags, 2 dotted red bags, 4 dark aqua bags.
dotted lavender bags contain 4 bright beige bags, 1 clear silver bag, 3 bright orange bags.
dotted gray bags contain 3 posh red bags, 1 dotted brown bag, 4 muted red bags, 4 faded coral bags.
plaid magenta bags contain 4 vibrant blue bags, 3 dark tomato bags, 1 vibrant coral bag, 5 dim salmon bags.
muted indigo bags contain 2 drab fuchsia bags, 5 dim teal bags.
light plum bags contain 5 dark aqua bags, 4 muted purple bags, 5 wavy lavender bags, 2 drab beige bags.
dark silver bags contain no other bags.
bright gold bags contain 2 wavy maroon bags, 2 clear tan bags, 5 striped chartreuse bags.
pale coral bags contain 4 posh magenta bags, 1 posh lavender bag.
clear aqua bags contain 4 wavy maroon bags, 5 light green bags, 4 dark olive bags.
vibrant plum bags contain 4 mirrored indigo bags, 4 vibrant silver bags.
dotted yellow bags contain 1 pale teal bag.
vibrant cyan bags contain 4 dotted maroon bags, 4 dark aqua bags, 2 posh fuchsia bags.
shiny lavender bags contain 5 light gold bags.
dull beige bags contain 2 faded coral bags, 4 clear magenta bags.
bright magenta bags contain 4 faded white bags, 3 drab black bags.
drab salmon bags contain 2 bright green bags, 1 dim fuchsia bag, 1 shiny black bag.
striped plum bags contain 4 posh bronze bags, 4 dotted green bags, 2 dark aqua bags, 3 vibrant chartreuse bags.
striped gray bags contain 1 dim black bag, 2 striped tan bags, 5 light lime bags, 3 striped black bags.
dark blue bags contain 1 mirrored teal bag, 3 striped violet bags.
pale yellow bags contain 5 posh teal bags, 5 clear magenta bags, 3 plaid violet bags, 5 light green bags.
dark crimson bags contain 3 shiny tomato bags, 5 striped yellow bags, 2 shiny violet bags, 1 striped fuchsia bag.
clear purple bags contain 5 vibrant tan bags, 2 mirrored green bags, 3 faded black bags.
vibrant green bags contain 4 clear salmon bags, 1 pale turquoise bag, 2 mirrored turquoise bags.
faded teal bags contain 3 plaid beige bags.
pale turquoise bags contain 2 bright crimson bags, 4 pale cyan bags, 4 mirrored turquoise bags, 3 dotted coral bags.
striped crimson bags contain 5 pale lavender bags, 3 striped tomato bags, 1 plaid aqua bag.
muted crimson bags contain 1 dotted bronze bag, 5 striped black bags, 4 dark blue bags.
dull cyan bags contain 2 shiny coral bags, 2 plaid turquoise bags, 5 dim green bags, 2 plaid violet bags.
clear red bags contain 4 shiny maroon bags.
dim teal bags contain 3 bright red bags, 5 dim tan bags.
plaid lime bags contain 5 bright white bags, 3 light indigo bags, 1 striped black bag, 5 vibrant beige bags.
dim gold bags contain 5 dark silver bags.
dotted brown bags contain 5 striped bronze bags, 4 drab tomato bags, 2 dim lavender bags.
dim blue bags contain 2 posh gray bags, 1 dim gray bag.
muted chartreuse bags contain 5 mirrored turquoise bags, 5 dull brown bags, 4 muted brown bags, 1 striped silver bag.
dim fuchsia bags contain 5 plaid beige bags, 1 drab fuchsia bag, 5 shiny gold bags.
mirrored gray bags contain 1 pale lavender bag, 5 shiny violet bags, 2 dull lime bags.
striped gold bags contain 5 clear beige bags.
light blue bags contain 3 mirrored turquoise bags, 1 posh teal bag, 2 pale brown bags, 3 shiny maroon bags.
drab red bags contain 4 striped tan bags.
dull chartreuse bags contain 2 striped bronze bags, 2 plaid bronze bags.
pale salmon bags contain 4 bright teal bags, 3 drab silver bags, 4 dotted bronze bags, 2 mirrored silver bags.
posh white bags contain 5 dark beige bags, 5 striped turquoise bags, 5 pale purple bags, 3 pale salmon bags.
shiny olive bags contain 4 bright tomato bags, 1 light teal bag, 5 pale cyan bags.
striped lime bags contain 4 muted turquoise bags, 5 dark white bags, 4 dark fuchsia bags, 3 faded black bags.
dull purple bags contain 5 dotted indigo bags, 3 pale coral bags, 3 pale beige bags, 5 shiny green bags.
dull brown bags contain 4 dim lavender bags, 2 striped black bags, 2 pale lavender bags.
muted blue bags contain 4 drab blue bags, 1 muted red bag, 3 light white bags.
wavy cyan bags contain 1 pale purple bag, 1 muted lavender bag, 5 vibrant magenta bags, 1 plaid yellow bag.
shiny purple bags contain 2 dark bronze bags.
plaid bronze bags contain 3 wavy blue bags.
posh tan bags contain 4 clear bronze bags, 4 bright cyan bags.
dim green bags contain 4 dim beige bags.
dark black bags contain 4 dim chartreuse bags, 1 muted blue bag, 2 pale silver bags.
drab chartreuse bags contain 2 vibrant blue bags, 5 dark tomato bags, 5 dark brown bags.
vibrant aqua bags contain 1 muted white bag, 5 posh teal bags.
striped salmon bags contain 5 plaid coral bags, 1 drab black bag, 4 bright salmon bags.
plaid beige bags contain 3 dotted bronze bags.
bright gray bags contain 3 dim plum bags, 1 dull white bag, 5 plaid white bags, 3 drab brown bags.
dull white bags contain 2 dotted coral bags, 1 dotted purple bag, 2 striped brown bags.
dim bronze bags contain 5 striped green bags, 1 dotted bronze bag, 5 striped violet bags, 1 muted gray bag.
striped indigo bags contain 5 shiny maroon bags, 3 clear chartreuse bags, 3 plaid gray bags, 5 muted gold bags.
vibrant tomato bags contain 2 posh gray bags, 2 plaid beige bags, 4 wavy olive bags.
posh red bags contain 2 pale cyan bags, 4 dim salmon bags.
wavy fuchsia bags contain 2 shiny lime bags.
bright teal bags contain 2 striped black bags, 5 light gold bags, 3 mirrored teal bags, 2 bright salmon bags.
shiny teal bags contain 5 faded purple bags, 4 wavy silver bags.
bright blue bags contain 4 drab maroon bags, 1 dark fuchsia bag.
dull crimson bags contain 1 dark tomato bag, 4 striped green bags.
shiny magenta bags contain 4 shiny coral bags, 4 bright gray bags, 4 shiny purple bags, 5 plaid coral bags.
faded blue bags contain 4 striped tan bags.
vibrant yellow bags contain 3 dim crimson bags.
vibrant purple bags contain 2 dotted tan bags, 1 wavy fuchsia bag, 5 plaid lime bags.
dark orange bags contain 3 faded tomato bags, 1 mirrored salmon bag, 5 pale tomato bags.
light magenta bags contain 2 clear blue bags.
dim beige bags contain 2 mirrored red bags, 2 faded white bags, 4 plaid beige bags, 4 drab olive bags.
dotted magenta bags contain 2 vibrant lime bags.
light yellow bags contain 3 wavy chartreuse bags, 5 drab turquoise bags, 5 dull black bags.
dark aqua bags contain 1 dark tomato bag.
mirrored chartreuse bags contain 3 posh gray bags, 2 wavy bronze bags, 5 plaid teal bags.
mirrored red bags contain 3 faded black bags.
muted turquoise bags contain 5 plaid teal bags.
dim maroon bags contain 3 vibrant white bags, 1 muted turquoise bag, 5 drab red bags, 5 muted teal bags.
drab silver bags contain 5 mirrored red bags.
wavy tan bags contain 2 dark salmon bags, 2 posh bronze bags, 2 dark tan bags, 1 drab turquoise bag.
dim black bags contain 3 dark olive bags.
striped yellow bags contain 2 clear magenta bags, 3 dim indigo bags, 1 muted green bag.
wavy purple bags contain 1 vibrant lime bag, 1 clear bronze bag, 4 dark white bags.
light green bags contain 3 wavy lavender bags, 5 dim cyan bags.
striped fuchsia bags contain 3 dotted green bags, 2 plaid maroon bags.
wavy teal bags contain 4 muted olive bags, 2 muted purple bags.`;

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

const inStr10 = `83
69
170
56
43
111
117
135
136
176
154
65
107
169
141
151
158
134
108
143
114
104
49
55
72
73
144
13
35
152
98
133
31
44
150
70
118
64
39
137
142
28
130
167
101
100
120
79
153
157
89
163
177
3
1
38
16
128
18
62
76
78
17
63
160
59
175
168
54
34
22
174
53
25
129
90
42
119
92
173
4
166
19
2
121
7
71
99
66
46
124
86
127
159
12
91
140
52
80
45
33
9
8
77
147
32
95`;

const inStr11 = `LLLLLL.LLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLL.LLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLL..L.LLLLLL
LLLLLLLLLL..LLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LL.LLLLLLLL.LLLLLLLL.L.LLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLL.L.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLL.L.LLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.L.LLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLL.LLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LL.LLL.LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLL.LLL.LLLLLLLLLL.LLLLLLLL
.LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.L.LLLLLLLL.LLLL.LLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.L.LL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL..LLLLLLLLLLLLL.LLL.LLLL
..LL....L.LL........L...L......LL..L.L........L....L..........L..L.........LLLL..L.L.L..LL...LL....
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LL.LL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLL..LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLL.LL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LL.LLLLL.LLLLLLLL
L.L.........L..L..L.L....LLLL...LL..L....L.L..L..L.L.L.L........LL.L...........L........L..LLL...LL
LLLLLLLLLL.LLLLLLLLLLL.LL.LLLLLLLLL.LLLLLL.LLLL..LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLL.L
LLLLLLLLLL.LLL..LLLLLLLLLLLLLLLLLLL..LLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.L.LLLLL..L.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLL.LL.LLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLL.LLL.L.LLLLLLLL
LLLLLLLLLL.LLLL..LLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL..LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLL.L.
LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LL.LLL.LLLLLL.LLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.L..LLLL.LLL.LLLLLL..LLLLLLLL.LLLLL..LLLLLL.
LLLLLLLLLL.LLLLLLL.LLLLLLLLLL.LLLLL.LLLLLLLLLLLLL..LLLLLLL.L.LLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL..LLLLLLLL.LLLLLLLLLLLLLLLL.L.LL.LLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLLLLLLL..LLLLLL.L.LL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL
LL...L.LL....L.LL.L.....L.LL......L.......L...........L.L..L.LL....LL..LLL.L.LL...........L...LLLL.
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLL.LL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.L..LLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLL.L
LLLLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LL..LLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.L.LLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
...LL.LL.L....L....LLL..LL..L.....................L....LL..L...LL..L........LL.....L...........L..L
LLLLLLLLLL.LLLL..LLL.LLLL.LLLLLLLLL.LLLLLL..LLLLL.LLLLLLLL.LLLLLLLLLLLLLLL...LLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.L.LLLLLLLLLL.L.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLL.LLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLLLLL.LLL..LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LL.LLL.LLL.LLLLLLLLLLL.LLLLLLLL.L.LLLLL.LLLLLLLL..LLLL.LLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
.......LL.L.LL.....LL.L...L.L..LL..L...L..L.......LLLL....LL..LL.L...L...L...L..L.L.LL..L...L....L.
L.LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL..LL..LLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLLLLL.LLLL..LLLLLLLL.LLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL..LLLLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLL.L.LLLLLLLLLLLL.L.LLLLLLLL
L..LLL..L........L.LL......L........LL.....L.L..LL...L......L...LL......L.L.....LL..L......L...L.LL
LL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL..LLL..LLLLLLLL
LLLLLLLLLLLLLL..LLLL.LLLLLLLLLL.LLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL
.L...L...L..LLLLLLL.L.L..............L.LL..L.L..LLL...L......LL.L...LL.L.L.L..L....L..LLL..LL.L....
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLL.L.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLL.LLLL.LL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLL.LLLLL.LLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL.L.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLL.LLLL.LLL.LLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLLLL..LL.LLLLLLL..LLLLLLL.LLLLLL.L.LLLLL.LLLLLLLL
LLLLLLLLLL.LL.L.LLLLLLLLLLL.LLLLLLL.LLLLLL.LL.LLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLL.LL.LLLLLLLL
LLLLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL..LLLLLLL.LLLLLLL.LLLLLLLLLLLL.L.L.LLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLL..LLLLLLLLLLLL.LL.LLLLLL.LLLLLLLL.LLLLLLLL.LL..LLL.LLLLLLLL.LLLLLLLLLLLLL.
....L.L..L......L.LL..L.L.LLL.L...L....LL.L..LL....LL.LL...LLL........L.LL..L...L..LL.LL..L...L...L
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLL.L
L.LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLL.LL.LLL.L.LLLLLLL.LLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.L.LLLLLLLLL.LLLLLLLLLL.LLLLLL.L
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLL.LLLLLL.LLLLLLLLLLLL.LL.LL.LLLLL.LLLLLLL..LLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL
LLL.L.L.L..L...L...LL.L........LL..L..L.....L..L.LLL..L.L.L.L.LL..LLLL.L............L..........L...
LLLLLL.LLL.LLLL.L.LLLLLLLLLLLLLLLLL..LLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLL.L..LLLL.L.LLLLLL
LLLLLLLLLL.L.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.L..LLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLL.L
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.
LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL..LLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.L
L.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LL.LLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLL.LLL.LLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLL.LLL.LLL.LLLL.LLLLLL..LLLLLLLLLLLLLL.LLLLLLLL
.....L..LLLL..LL....LLLL.LL..L..L...L.L...LL.L...L.........L.L..........L...L....L.L.LL.LL..LL.LL.L
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLL.LL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLL.LLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL
LLLLLLLLLL.LLLL.LLL.LL.LLLLLLLLLLLLLLL.LLL..LLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL
.L.LL........L...LL.LLL...............LL....L...L....LL.LLL...............L....L...L...L....L...L..
LLLLLLLLLLLLLLL.LLL.LLLLL.L.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLL.LLLLLLLLLLLLL..LLLLLLLL
LLLLLLL.L..LLLL.LLLLLLLLL..LLLLL.LL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLL.L.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLL..LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLL..LL.L.L..LL.LL....LL..LL.LLL...L..LL...L..L....L......L.L..LLL.L....LLLL.LL....LL.LL.....L.L
LLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLL.LLLLLL..LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLL.LLLL.LLL.LLLLL.LLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LL.LLLLL.LLLLLLLLLL.LLLLLLLLL.L.LLLLLLLL
.LLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL`;

const inStr12 = `F75
L90
N5
W2
N5
L90
S1
R90
S4
E2
W1
F100
L180
W3
N1
R180
W1
S4
R270
S4
F23
E2
F17
N5
R90
F83
E2
F34
E3
S4
F19
W4
L90
W2
L90
E2
F79
L90
F80
N1
R90
F35
L90
N5
E3
S5
R90
F71
N1
F19
F49
R90
E4
L90
W1
R90
S2
E1
L180
F79
W4
L180
F74
W5
R90
F30
R90
W2
R90
F35
R90
F12
W2
F7
R90
E5
F68
E3
F21
N4
F22
W4
S2
F89
L90
N5
R90
F8
R90
W2
S3
R180
N2
R90
F49
N4
E5
F31
S3
E4
F61
E1
L90
N1
W5
F15
F13
E4
N2
R180
S2
L90
F92
S4
R180
L90
S1
L90
F98
N4
E3
F69
S3
R180
F59
S5
R90
F32
E5
S4
W4
F9
R180
F44
L90
W1
L180
F74
W1
F55
R270
S3
F62
W3
F61
N2
L90
F43
S3
F86
W1
S3
E3
F34
L90
F77
N1
F27
N5
W5
N3
F80
E2
L180
F59
W1
L90
N4
R90
W5
L180
W5
L90
F17
E5
L180
W4
R180
W4
F70
S5
R90
W4
W4
N3
W1
N2
E5
F53
N5
R90
R90
E2
N5
R270
S5
R90
N5
E1
R90
F76
R90
W3
S2
R90
S5
E1
L90
E2
F58
R90
F15
N2
L90
N5
F65
E5
N2
R90
W1
F40
S4
R90
F23
W4
R90
W4
F17
S2
R90
E4
F58
R90
L90
F64
N4
F63
E5
N1
F38
N3
F19
E5
S4
F14
R90
S3
E2
S4
E1
F12
W3
L90
F33
S4
W3
F29
R90
N3
F44
E5
N1
F49
W5
F52
N5
L90
S4
F31
R90
N3
L270
L270
E4
N4
W1
L90
S5
W4
R180
N3
L180
F2
S1
L180
N3
L90
N1
W4
R180
W5
R270
N4
L180
F51
R180
S5
F35
E3
R180
F1
S3
E2
F47
E4
S5
E1
L90
F16
S4
F17
N1
W2
L90
F99
E1
R180
N1
F78
L90
F18
S2
W3
N2
F56
R270
W1
R90
F53
L180
F6
W5
R90
W4
F27
R90
F73
E5
R90
W4
S4
W3
S2
E5
N5
R270
F43
W1
F77
E4
F85
W2
R90
N1
E1
F39
R90
W2
N4
E2
W4
F81
W4
F3
W4
R180
W2
N5
R90
N5
E2
S5
S3
E1
N4
W1
S3
F48
S2
F23
E2
R180
F89
L180
N3
E1
N5
W2
L90
E1
F80
R90
S1
E3
N5
L90
F11
W5
F70
N3
W1
L90
N5
F99
N5
F24
R180
E4
F57
S1
F9
S5
R90
W4
F16
E1
F18
F17
L180
S1
L90
S1
E2
N1
E4
F84
N1
F6
E1
L180
W3
L180
N3
F60
F43
S3
F48
W2
S1
R180
N1
S2
F78
L180
W4
F51
W5
N2
E2
N1
W4
F65
N3
L90
W3
N2
W2
F46
N4
W4
N2
W2
F74
R180
E4
R90
N1
F33
S4
L180
S1
F15
R180
S5
L180
F21
N4
F87
W4
L90
S4
F40
S5
W3
L180
F78
W2
F40
N3
E3
S4
W1
S4
E1
S4
W5
S2
F82
E5
R180
F7
W3
R90
N2
R90
W5
N5
W5
S3
E2
L90
E1
F77
E4
F70
W5
S2
W2
F7
W4
F8
R180
W5
L90
F49
W2
L90
S5
W1
S3
F74
W3
F76
W3
N1
E4
S2
F65
E1
W1
F85
E5
F67
R90
W1
F8
R180
N2
F94
W4
R90
S4
F81
N5
R90
E4
F9
N3
F49
R180
N3
F94
N4
R90
S2
F34
W2
E4
W5
F84
S4
W1
R180
W5
F13
W3
L90
N1
E1
R90
S2
R180
F81
L90
F36
W3
S4
W1
F3
R90
W3
R90
E5
R90
F46
L90
F63
N1
L90
W4
N1
S2
N3
L90
F64
W5
N4
F45
W4
S4
R90
W3
N5
R90
L180
E4
R270
S1
L180
E1
F22
E4
F11
W3
F12
W3
R90
S5
E3
F4
R90
S3
F3
L180
S2
F16
E5
R90
F75
W4
N1
S4
F81
L90
F69
N5
L90
W5
F63
N3
W2
L90
F39
E5
F81
W3
F1
L90
F31
W4
S4
F32
W3
N4
L180
N5
W2
F20
L90
F42
S3
E5
S4
L90
S2
L90
S3
W5
F54
R90
F85
S4
F22
W3
F21
R90
F66
S1
F22
S4
W5
N5
E3
F52
L180
W3
S1
W5
R180
F43
E5
F16
W4
S5
W5
N4
F97
E5
F4
E2
R180
F99
S5
F44
R90
W5
N2
L90
F46
E4
L180
E4
R90
F45
R90
S4
F30
R90
F23
N5
W2
F45
S3
F70
L90
W2
F90
W5
F81
E2
F15
L90
F90
N2
F78
S4
F3
F37`;

const inStr13 = `1001612
19,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,821,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,463,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`;
// const inStr13 = `1001612
// 1789,37,47,1889`;

const inStr14 = `mask = 1X000X0101XX101101X01X101X1000111X00
mem[10004] = 3787163
mem[18866] = 665403
mem[13466] = 175657346
mem[21836] = 99681152
mask = 110X1001110110X10100010X0000X010X11X
mem[14957] = 51287
mem[47879] = 1706397
mem[60036] = 139731
mask = 0100X011110X11111100000010X1XXX1X100
mem[13312] = 473519
mem[45712] = 11576
mem[65077] = 499111
mem[20582] = 970
mem[57647] = 30626762
mem[5265] = 14655010
mask = 11X010010X010011X110X00X1XX0001101X1
mem[45904] = 324397
mem[33792] = 56494291
mem[35775] = 597
mem[58036] = 267391350
mem[10448] = 77300
mem[49376] = 12095094
mask = XX000001100001100X0X10000X010X111110
mem[17484] = 382723
mem[58181] = 58
mem[51203] = 253
mem[36984] = 552006
mask = 110XXX010X011X100X00110X101010110000
mem[46734] = 272208
mem[50532] = 1071505732
mem[42057] = 18023379
mem[40723] = 203396667
mem[60376] = 24255
mask = 1110X001010010110X00XX0110X1X00000X0
mem[6373] = 509708
mem[12417] = 1586323
mem[35427] = 457
mem[14175] = 2420631
mem[28822] = 749
mem[52248] = 12324270
mask = X1X000111X0100100X00XX10X00011X1X000
mem[26803] = 500540
mem[7065] = 8843071
mem[55118] = 40141309
mem[2804] = 3136584
mask = 110X1X0001XX100101001110XX0010X100X0
mem[19256] = 7428
mem[13879] = 1353915
mem[43372] = 5882
mem[6447] = 4535
mask = 100X11X01001XX01110X001001000X010X10
mem[55173] = 21377
mem[12745] = 125083
mem[311] = 602879
mem[39306] = 2711255
mask = 1X10X001100010110100101100110X0X0111
mem[65528] = 672476373
mem[40933] = 15862
mem[20739] = 128727771
mem[30419] = 29600646
mem[26253] = 3206153
mask = 1XX00X011101X01101X0X001110X1XX10100
mem[59482] = 66620
mem[41885] = 399931609
mem[22336] = 62900
mem[8106] = 1106171
mem[5796] = 37170431
mem[17413] = 15524
mem[15447] = 28761
mask = 11000001X10X00110XX1100000011011X100
mem[43397] = 16642
mem[24122] = 173985292
mem[10901] = 6397292
mem[7385] = 7495847
mask = X1000001X00010110100X0010000111X0100
mem[38664] = 43195
mem[17708] = 56326435
mem[47879] = 3654030
mem[26738] = 6346961
mem[22210] = 118801717
mem[56703] = 13588355
mem[65252] = 262312
mask = 1X0XXX000100X0X101001100001X101X1X00
mem[62976] = 82374293
mem[64638] = 14434
mem[43964] = 13761
mask = 01000001X00110110X00XX00X10010X10X11
mem[4724] = 2903
mem[5158] = 164937
mem[35328] = 30334
mem[46966] = 2759991
mem[52761] = 25675
mask = X1101000XX1X00X10100001011X01101XXX1
mem[4392] = 118555033
mem[23892] = 4622396
mem[65088] = 1887562
mem[13476] = 226944
mask = 11X0X001X1X1001101101X0X110X000X01X0
mem[311] = 290524064
mem[54164] = 1109593
mask = 100X100001000X0101000X010XX11011110X
mem[62632] = 2370
mem[52805] = 3829934
mem[40012] = 9175340
mem[37847] = 117719078
mask = X110000X010000X10100001X1011010X0X00
mem[37404] = 3551660
mem[15104] = 527114796
mem[49376] = 968
mem[56095] = 316752
mem[6747] = 1807
mask = 11000X010101101X01000X001X011XXX10X0
mem[41840] = 2775
mem[60125] = 182425209
mask = 10011000010XX011X100101010XX1X1X0100
mem[6747] = 4044
mem[16920] = 114852
mem[4128] = 41260
mask = X10000X11001X01X010000X000XX10X0X111
mem[14175] = 16258730
mem[41484] = 2757
mem[37593] = 33406295
mem[8317] = 415217155
mem[51008] = 2636
mem[21446] = 259080582
mem[15515] = 2734
mask = 11X0X001X10X100X01000110101X101X00X0
mem[61143] = 129
mem[23860] = 247
mem[47879] = 22784315
mask = 01000011110X111XX1000XX0110100X10X0X
mem[2435] = 1973
mem[23908] = 133875113
mem[12460] = 103067
mem[6211] = 1359103
mem[7534] = 23782
mask = 111000010100X0X10100001010X1XX000XXX
mem[53221] = 4273517
mem[13255] = 3334
mem[31239] = 113778111
mem[32900] = 6938492
mask = 1110XX010110X1XX011011000111100X1101
mem[9359] = 8377654
mem[52805] = 3549344
mask = 0X1000X01100X1XXX00X0011001010000101
mem[28303] = 227915
mem[257] = 1876777
mem[63555] = 192083072
mem[56391] = 147544840
mem[63072] = 6915
mask = XX0000111X011111010X0001100000010110
mem[10311] = 16038309
mem[41484] = 30818
mem[54410] = 3229
mem[2435] = 10793289
mem[26631] = 87736025
mem[13639] = 7253
mask = 0100101XX1X01111X1XXX0001100010101X0
mem[2028] = 6656580
mem[29799] = 2772
mem[64020] = 958010
mem[5974] = 569
mem[8667] = 2023725
mem[16595] = 25313923
mem[35402] = 558
mask = 1X0X00001X01100X1X0000010100001111X1
mem[41459] = 12342565
mem[23672] = 36167
mem[10300] = 65046557
mem[56503] = 62989647
mem[37993] = 217162
mask = 1111101100000X01X1011X111111X1100X10
mem[21085] = 15851
mem[25194] = 6075854
mem[42984] = 435548
mem[8346] = 978945
mem[5661] = 4981
mask = 0X0000011X0X0010010X1XXXX01010001X01
mem[27985] = 234997
mem[14463] = 45760
mem[15023] = 17580
mask = 110000110X01X00101X01X1X10001101X000
mem[63245] = 6018482
mem[30940] = 257367431
mem[10617] = 1134348
mem[57343] = 284899785
mem[21373] = 1004097
mask = 1100100XX10X00111X101001X10100101101
mem[54836] = 45353796
mem[43493] = 1827049
mem[790] = 48270178
mem[42104] = 67747
mem[33977] = 222196
mem[56552] = 21306885
mem[63222] = 64849326
mask = XXX00101011110110100010010111000X01X
mem[33756] = 4616
mem[44216] = 6220360
mem[25526] = 811292762
mem[59209] = 6509
mem[13255] = 2140854
mask = 1110000110X0X11X0100000110100X010110
mem[7764] = 3574
mem[872] = 16596
mem[5555] = 763
mem[59969] = 25416012
mask = 0X000001100X0010010X1X1110X0X0101010
mem[64638] = 2350
mem[36949] = 3170
mem[41641] = 2041278
mask = 11101001X1X01X0X01X01000101110000101
mem[63222] = 998162428
mem[36105] = 58286575
mem[36644] = 6605534
mem[64290] = 352783
mem[52428] = 72931
mem[1450] = 460492
mask = 00X0000111X10XX00101111XX00001XX001X
mem[47375] = 1428142
mem[12574] = 262115
mem[1393] = 215199811
mem[2729] = 53399
mem[1417] = 163417802
mem[13888] = 30705
mem[52121] = 629932866
mask = 1X00010X01X01X01010X10111X1100101000
mem[63515] = 22411
mem[23091] = 909249
mem[21738] = 438843570
mem[44851] = 181
mem[10095] = 4014
mask = 010X0X11100X1X100100000101000111011X
mem[19759] = 29570
mem[2970] = 191037
mem[9604] = 4079
mem[657] = 465
mask = 1X000X01X1X10011010X1XX11100X0111100
mem[43949] = 478212819
mem[5597] = 63092
mem[58361] = 5457568
mem[41459] = 187363
mask = XX1X0011X100011X00101X11000XX101100X
mem[13888] = 638337993
mem[37934] = 4985
mem[55575] = 76330
mem[10257] = 3056
mem[9744] = 4917501
mem[32361] = 63127
mask = 11X00011X001001X010001000010011X0X0X
mem[43761] = 6764398
mem[24646] = 30592
mem[36456] = 799
mem[42057] = 1771
mem[35165] = 2871
mask = 110000010X01X00101X01XX01X1001X00100
mem[30294] = 30942244
mem[34398] = 1382102
mem[63222] = 260411654
mem[39566] = 133753617
mem[4818] = 4462832
mem[36866] = 52
mem[14603] = 244236
mask = 1100010XX101101X01XX111X0001X1111110
mem[33984] = 490757
mem[29144] = 42516
mem[12171] = 11800
mem[35282] = 19533
mem[30399] = 14796
mem[19650] = 158686001
mem[6447] = 177
mask = X100001X1001X011X10001000110111001X0
mem[62632] = 98281297
mem[57359] = 3527162
mem[12082] = 171252979
mask = 11000011110100XX0X000001X11000100000
mem[35211] = 130598799
mem[28482] = 85586
mem[55217] = 240324
mem[6740] = 92413135
mem[1291] = 79746542
mask = 1000010XX101101101X000101X0010010110
mem[45328] = 3595262
mem[3490] = 877
mem[36826] = 11235
mem[110] = 1713
mem[7313] = 13261628
mem[17524] = 263660940
mem[40227] = 14071730
mask = 1101110X00011X10000001011110X10X0100
mem[26215] = 3075603
mem[2028] = 2167
mem[36320] = 586
mem[8270] = 71526
mem[44216] = 5252007
mask = 1110100100010011111X00X0X000X0000111
mem[50149] = 58998983
mem[47879] = 1944464
mem[19922] = 3875
mem[42517] = 43875909
mem[18735] = 7318682
mem[26678] = 17877212
mask = 0100001101X1X10101001011011X0X000100
mem[56402] = 14747004
mem[29737] = 15131100
mem[15515] = 2942003
mask = 110000X10XX110X10110111110XX01000110
mem[54032] = 100009547
mem[15057] = 5910646
mem[62982] = 135495807
mem[41840] = 44565248
mem[43139] = 14110
mem[37411] = 434104731
mask = 1100000XX10110X101000XX11010XX100100
mem[29795] = 954605601
mem[13364] = 402011
mem[22468] = 778482653
mem[46818] = 25125
mem[5527] = 101
mem[9814] = 306208600
mem[43397] = 239110
mask = X1X00011X10100X10100111010X110X00X00
mem[43405] = 4234874
mem[49758] = 5465414
mem[20027] = 12031953
mem[52428] = 2873
mem[23261] = 117091570
mem[54960] = 1624
mem[1039] = 22719
mask = X1101001011X110001X011110101011X0011
mem[14463] = 92010258
mem[61143] = 11340
mem[1450] = 15947
mask = X10000X1X1010011X10000X01011X0X1010X
mem[45367] = 1060810121
mem[26527] = 23928
mem[15407] = 30081582
mem[8768] = 7626
mask = 100X1X001001000111000011X001XX0X1X1X
mem[57779] = 1222
mem[60458] = 507523
mem[9438] = 2655
mem[11306] = 32130962
mem[13120] = 212870
mem[18699] = 32470
mask = 11X0XXX0110100X101000100100000100111
mem[50532] = 6760
mem[65458] = 1921851
mem[50231] = 1055316713
mem[11611] = 82996
mem[32408] = 1879545
mem[56334] = 6421
mem[19546] = 1572
mask = 0101101101011001X0001X111X1100010X00
mem[11808] = 39158
mem[13364] = 3686
mem[58181] = 3954
mask = 11X000110X0100110100X1XXX010011001X0
mem[18996] = 10869875
mem[9359] = 11905624
mem[10037] = 675
mem[63666] = 1335625
mask = 10011000100X000111000XX000010000X110
mem[30987] = 168211
mem[2059] = 19013
mem[36287] = 21065
mem[55613] = 24671374
mask = 01110X11000X0XX101100111111101X11010
mem[27985] = 1661941
mem[33107] = 921718
mem[23617] = 16368
mem[41120] = 74
mask = 11000001100X1X11010000X001X0X1X101X0
mem[39739] = 63291061
mem[52804] = 15173
mem[14981] = 648
mem[65088] = 1644
mem[47873] = 43267217
mask = 11X000XX100X11110XX01X001X0001010000
mem[39631] = 19215077
mem[17524] = 513536515
mem[49990] = 109517
mask = X000X000100X0001110000X1010011010001
mem[13466] = 124984033
mem[12574] = 260829
mem[1403] = 115889305
mask = 0110XX1X11010X10000X00XX01X01011001X
mem[37593] = 173042
mem[49988] = 200423
mem[52823] = 7747994
mem[2391] = 611579
mask = X01XX00X11X100100X011111010011000010
mem[50986] = 277302
mem[48505] = 2276386
mem[28286] = 12419937
mem[35832] = 7585
mem[44379] = 340032079
mask = X1X0X011000111110X000001111000100100
mem[26228] = 1347384
mem[46316] = 35047
mem[50294] = 7049
mem[31571] = 5511
mem[6747] = 2881667
mem[55522] = 239714
mask = X11XX0100101X110001001100010X1X01X00
mem[63523] = 3173
mem[15717] = 1059
mem[1039] = 1756
mem[652] = 74372
mem[52561] = 1253065
mem[34744] = 12
mem[36103] = 67545913
mask = X11X001X0X0X00110100010X0101X101X100
mem[43915] = 2312924
mem[625] = 52614
mem[16137] = 3337
mem[33395] = 56449350
mem[57004] = 9401213
mem[22475] = 273016261
mask = 11X000X1100X1X110100X10000XX0X000111
mem[17020] = 461488870
mem[64339] = 76903
mem[12489] = 1867
mem[40021] = 416088
mem[45893] = 941080
mask = 010XX0110X0X1XX10X000111101000X101X0
mem[1347] = 27142438
mem[56404] = 28056
mem[15515] = 13463506
mem[34610] = 408788
mem[23768] = 4390
mask = 0X0X000X10000X100X000001X0X00X11111X
mem[34140] = 2486
mem[45229] = 219957
mask = 1X010X0X11X1100X01000001010100110000
mem[63207] = 214605819
mem[3120] = 975024
mask = X100000100011XXX00000000110010X0X010
mem[36039] = 1351
mem[24280] = 1529
mem[54240] = 438022
mem[49990] = 7079087
mem[21713] = 14792683
mem[52177] = 1961
mem[7345] = 406699254
mask = 1X00010X01X010110X001110100X00101100
mem[27536] = 12551
mem[7678] = 10576
mem[17936] = 1475
mem[9814] = 99131792
mem[41885] = 96156
mem[13120] = 35225
mask = X111X011000X00X101XX01X10111X1X11010
mem[60152] = 82433112
mem[22477] = 4090530
mem[16768] = 58352433
mem[7764] = 192408366
mem[51535] = 69751
mem[850] = 131
mem[48467] = 377832323
mask = 0100001110010010X10X1X111101001100X1
mem[23672] = 1931
mem[6708] = 469
mem[16775] = 2368
mem[12502] = 115896934
mask = 100X0000X00XX0011100X01X010111X11011
mem[24733] = 936
mem[269] = 362232
mem[60475] = 322199998
mem[14404] = 1261
mem[42303] = 27351706
mem[13699] = 34315
mask = 0111101100X10X11010X010X0101X00X10X0
mem[11893] = 62548
mem[57647] = 237349
mem[21200] = 14649
mem[27128] = 80169
mem[32969] = 725133
mem[31032] = 131322
mask = 0100XX01100X1010010000000X01X0110110
mem[18930] = 68333625
mem[6819] = 341
mem[26253] = 220435
mem[15909] = 79688
mem[21059] = 2671693
mask = X11XX00X11XX001101X00XX0110000100111
mem[34832] = 248
mem[11532] = 708205
mem[654] = 7796300
mem[46941] = 94124
mem[49206] = 109
mem[31987] = 1877
mask = 11000X01X1001X0X01X011X00000X0000101
mem[60475] = 67279
mem[14929] = 3073
mem[38463] = 6762244
mem[47778] = 173399092
mem[62317] = 57461236
mask = 110XX000110X1001X100000001000X110000
mem[15407] = 249
mem[7202] = 55714
mem[48800] = 25528109
mem[20959] = 4106091
mem[6496] = 1976005
mem[6708] = 3013607
mask = 110000011XX1X011X1001101010XXX010X10
mem[64787] = 469608465
mem[41416] = 59853
mem[10680] = 16299
mem[19394] = 56413
mem[39572] = 25343
mem[19686] = 277550
mask = 01X0001X1100001X00101110111X1001X000
mem[4228] = 590408603
mem[62269] = 394
mem[60694] = 483056
mem[25301] = 664548494
mask = 110X00001101100101000101X1X1X00100X1
mem[29136] = 3854559
mem[24118] = 486135
mem[34398] = 430609446
mem[12782] = 3721785
mask = 110001001101X0X10100110000X0010100X0
mem[5661] = 13272
mem[2012] = 38954
mem[60732] = 7014
mask = 0100X0X1X00100100100100111111001100X
mem[49716] = 284158681
mem[12224] = 10628127
mem[32900] = 7796903
mask = 0110001XX10X0X1000X0011X00X0110X00X0
mem[8844] = 26023958
mem[65175] = 81386046
mem[54410] = 4119058
mask = X10000X1XX01X01X0100000X1X0001010100
mem[62976] = 29914819
mem[7792] = 49702987
mem[61389] = 124692445
mem[10004] = 29696422
mem[61943] = 43748477
mem[61040] = 199512596
mask = 0X00XX11110X10X1010101010X0011X00X1X
mem[10880] = 91763
mem[93] = 46698
mask = X100XX111X01001101000X00101000000000
mem[30458] = 4474263
mem[2932] = 25975
mem[25986] = 106060
mem[20974] = 20857
mem[23672] = 853256
mask = 11000011010XX01101X000XX10111001X11X
mem[39572] = 24316000
mem[14981] = 41633461
mem[41885] = 3807449
mem[49990] = 31780591
mem[2414] = 5032671
mask = 111010XXX110X1010110100001111010X101
mem[26803] = 474
mem[15407] = 33070532
mem[35211] = 24880155
mem[52428] = 396521
mem[9814] = 252376513
mask = 01000011XX011011X10XX000X11010000010
mem[20974] = 101
mem[13535] = 632
mem[12489] = 58930152
mem[61506] = 681
mem[18309] = 8028011
mem[33984] = 7404765
mask = 1100X01X01X1101101100011100X01000111
mem[15864] = 413
mem[15023] = 7825
mem[60154] = 451000
mem[53862] = 240968
mem[63761] = 5500
mem[8136] = 5727
mask = 01000X1XX101001111X00000101X110X0X00
mem[884] = 1258
mem[12502] = 150248279
mem[63] = 1403008`;

const inStr15 = `9,3,1,0,8,4`;
// const inStr15 = `1,3,2`;

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

var getDay3Input = () => {
    return inStr3.split('\n').map(s => s.trim());
}

var getDay4Input = () => {
    let passports = [];
    
    let curGroup = [];
    let lines = inStr4.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const s = lines[i];

        if(!Boolean(s.trim())){
            passports.push(curGroup);
            curGroup = [];
        } else {
            const sections = s.trim().split(' ');

            for (const sec of sections) {
                const fields = sec.split(':');
                curGroup.push([fields[0], fields[1]]);   
            }
        }
    }

    passports.push(curGroup);

    return passports;
}

var getDay5Input = () => {
    let inputs = [];
    inStr5.split('\n').forEach(s => {
        const row = s.substr(0,7);
        const col = s.substr(7,3);
        inputs.push([row, col]);
    });
    return inputs;
}

var getDay6Input = () => {
    let groups = [];
    
    let curGroup = [];
    let lines = inStr6.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const s = lines[i];

        if(!Boolean(s.trim())){
            groups.push(curGroup);
            curGroup = [];
        } else {
            curGroup.push(s.trim());
        }
    }
    groups.push(curGroup);

    return groups;
}

var getDay7Input = () => {
    let inputs = {};
    
    inStr7.split('\n').forEach(s => {
        const parts = s.replace(" bags contain ",",").replace(/ bags/g,"").replace(/ bag/g,"").replace("s.","").replace(/\./g,"").split(",");
        
        let bagColor = parts[0].trim();
        inputs[bagColor] = [];

        for (let i = 1; i < parts.length; i++) {
            const str = parts[i].trim();
            
            if(str.indexOf("no other") >= 0) break;

            inputs[bagColor].push([str.substr(2), parseInt(str)]);
        }
    });

    // inputs.forEach(s => console.log(s["bagColor"], s["contents"]));

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

var getDay10Input = () => {
    return inStr10.split('\n').map(s => parseInt(s));
}

var getDay11Input = () => {
    return inStr11.split('\n').map(s => s.trim());
}

var getDay12Input = () => {
    return inStr12.split('\n').map(s => [s[0], parseInt(s.substr(1))]);
}

var getDay13Input = (part) => {
    const lines = inStr13.split('\n');
    return [lines[0], lines[1].split(',').map(str => str == 'x' ? -1 : part == 1 ? parseInt(str) : BigInt(str))];
}

var getDay14Input = () => {
    const lines = inStr14.split('\n');
    const parse_lines = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const parts = line.split(' = ');
        
        if(parts[0].trim() == 'mask') {
            parse_lines.push([0, parts[1].trim()]);
        } else {
            const memAdd = parseInt(parts[0].substr(4));
            const memVal = parseInt(parts[1].trim());
            parse_lines.push([1, memAdd, memVal]);
        }
    }
    
    return parse_lines;
}

var getDay15Input = () => {
    const lines = inStr15.split('\n');
    return lines[0].split(',').map(s => parseInt(s));
}
// console.log(getDay15Input());
// console.log("===============");

exports.getDay1Input = getDay1Input;
exports.getDay2Input = getDay2Input;
exports.getDay3Input = getDay3Input;
exports.getDay4Input = getDay4Input;
exports.getDay5Input = getDay5Input;
exports.getDay6Input = getDay6Input;
exports.getDay7Input = getDay7Input;
exports.getDay8Input = getDay8Input;
exports.getDay9Input = getDay9Input;
exports.getDay10Input = getDay10Input;
exports.getDay11Input = getDay11Input;
exports.getDay12Input = getDay12Input;
exports.getDay13Input = getDay13Input;
exports.getDay14Input = getDay14Input;
exports.getDay15Input = getDay15Input;