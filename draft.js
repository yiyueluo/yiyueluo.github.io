<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
    integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
    integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./styles.css">
  <script src="js/main.js"></script>
  <script src="js/scroll.js"></script>

  <title>Yiyue Luo</title>
</head>

<body>
  <!-- nav-bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" style="width: 80%;">
      <a class="navbar-brand" href="./index">Yiyue Luo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html#pubs">Publications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html#exp">Experience</a>
          </li>
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="./projects">Projects</a>-->
<!--          </li>-->
        </ul>
      </div>
    </div>
  </nav>

  <!-- body -->
  <div class="container-fluid" style="width: 80%;">
    <!-- Biography -->
    <div class="row" style="margin-top: 10px;">
      <div class="col-md-4" style="text-align: center;">
        <img src="./image/headShot.PNG" alt="Profile Picture" style="max-width: 100%; max-height: 250px;">
        <div style="margin-top: 5px;">Email: yiyueluo@mit.edu</div>
        <div>
          <a href="https://scholar.google.com/citations?user=jpWnp-kAAAAJ&hl=en" target="_blank">Google Scholar</a>|
          <a href="https://www.linkedin.com/in/yiyue-luo/" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div class="col-md-8" style="margin-top: 10px;">
        <h3>Yiyue Luo</h3>
        <div>I am a 5th year PhD student in the
          <a href="https://cdfg.mit.edu/" target="_blank">Computational Design & Fabrication group (CDFG)</a>
          at MIT Electrical Engineering and Computer Science (EECS), advised by
          <a href="https://cdfg.csail.mit.edu/wojciech" target="_blank">Professor Wojciech Matusik</a>
          and
          <a href="http://www-mtl.mit.edu/wpmu/tpalacios/brief-bio-cv/" target="_blank">Professor Tomas Palacios</a>.
          Before joining MIT, I received my B. S. in Materials Science and Engineering at University of Illinois
          Urbana-Champaign. I worked as an undergraduate research assistant in
          <a href="http://rogersgroup.northwestern.edu/" target="_blank">Professor John A. Roger's group</a>
          from 2015 to 2017. My research interests are fabrication, smart textiles, and tactile sensing.
        </div>
      </div>
    </div>
  </div>


<!--     News -->
  <div class="container-fluid" style="width: 80%;">
    <h4 style="margin-top: 30px;" id="news">News</h4>
    <ul>
      <li>I</li>

    </ul>
  </div>



<!--     Publication -->
  <div class="container-fluid" style="width: 80%;">
		<h3 id="Publications" style="padding-top: 80px; margin-top: -80px;">
			Publications
			<small><small>
			(<a href="" id="select0" onclick="showPubs(0); return false;">show selected</a> /
			 <a href="" id="select1" onclick="showPubs(1); return false;">show by date</a> /
       			 <a href="" id="select2" onclick="showPubs(2); return false;">show by topic</a>)
			</small></small><br>

			<small><small>
		  	<font color="black">Research Topics:
				<a href="#dynam" onclick="showPubs(2)">Robotic Manipulation</a> /
				<a href="#phys" onclick="showPubs(2)">Physical Scene Understanding</a> /
				<a href="#multi" onclick="showPubs(2)">Multi-Modal Perception</a> /
				<a href="#imi" onclick="showPubs(2)">Imitation Learning</a>
			</font><br>
			</small></small>
		</h3>

		<div id="pubs"></div>

		<script id="pubs_selected" language="text">
			<font color="black">(* indicates equal contribution)</font><br><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/comp_nerf_dy/combined.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://dannydriess.github.io/" target="_blank">Danny Driess</a>,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>, and
				<a href="https://www.user.tu-berlin.de/mtoussai/" target="_blank">Marc Toussaint</a>
				<br>
				<b><font color="black">Learning Multi-Object Dynamics with Compositional Neural Radiance Fields</font></b><br>
				<b><a href="https://corl2022.org/" target="_blank">CoRL 2022</a></b>,
				<a href="https://dannydriess.github.io/compnerfdyn/index.html" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://openreview.net/forum?id=qUvTmyGpnm7" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/comp_nerf_dy/comp_nerf_dy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/robocraft/robocraft.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://hshi74.github.io/" target="_blank">Haochen Shi</a>*,
				<a href="http://hxu.rocks/" target="_blank">Huazhe Xu</a>*,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>
				<br>
				<b><font color="black">RoboCraft: Learning to See, Simulate, and Shape Elasto-Plastic Objects with Graph Networks</font></b><br>
				<b><a href="https://roboticsconference.org/" target="_blank">RSS 2022</a></b>,
				<a href="http://hxu.rocks/robocraft/" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://arxiv.org/abs/2205.02909" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/hshi74/RoboCraft" target="_blank"> <small>[Code]</small></a>
				<a href="projects/robocraft/robocraft.bib" target="_blank"> <small>[BibTex]</small></a><br>
				Abridged in <b>ICRA 2022</b> workshop on Representing and Manipulating Deformable Objects <a href="https://deformable-workshop.github.io/icra2022/" target="_blank"><small>[Link]</small></a><br>
				<small>Covered by</small>
				<a href="https://news.mit.edu/2022/robots-play-play-dough-0623" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.newscientist.com/article/2325970-ai-powered-robot-learned-to-make-letters-out-of-play-doh-on-its-own/" target="_blank"> <small>[NewScientist]</small></a>
				<a href="https://techcrunch.com/2022/06/23/a-quick-trip-to-mars/" target="_blank"> <small>[TechCrunch]</small></a>
				<a href="https://hai.stanford.edu/news/training-robot-shape-letters-play-doh" target="_blank"> <small>[Stanford HAI]</small></a>

				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/nerf-dy/nerf-dy-multiview.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
				<a href="https://people.csail.mit.edu/lishuang/" target="_blank">Shuang Li</a>*,
				<a href="https://vsitzmann.github.io/" target="_blank">Vincent Sitzmann</a>,
				<a href="https://people.csail.mit.edu/pulkitag/" target="_blank">Pulkit Agrawal</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">3D Neural Scene Representations for Visuomotor Control</font></b><br>
				<b><a href="https://www.robot-learning.org/" target="_blank">CoRL 2021</a></b>,
				<a href="https://3d-representation-learning.github.io/nerf-dy/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2107.04004" target="_blank"> <small>[Paper]</small></a>
				<a href="https://youtu.be/ELPMiifELGc" target="_blank"> <small>[Video]</small></a>
				<a href="https://openreview.net/forum?id=zv3NYgRZ7Qo" target="_blank"> <small>[OpenReview]</small></a>
				<a href="https://3d-representation-learning.github.io/nerf-dy/nerf-dy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				<font color="firebrick"><b>Oral Presentation (Top 6.5%)</b></font><br>
				Abridged in <b>RSS 2021</b> workshop on Visual Learning and Reasoning for Robotics <a href="https://rssvlrr.github.io/" target="_blank"><small>[Link]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/senstextile/senstextile.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
        			<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
        			<a href="https://pratyushasharma.github.io/" target="_blank">Pratyusha Sharma</a>,
        			<a href="https://www.csail.mit.edu/person/wan-shou" target="_blank">Wan Shou</a>,
        			<a href="http://people.csail.mit.edu/kuiwu" target="_blank">Kui Wu</a>,
        			<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
        			<a href="https://www.csail.mit.edu/person/beichen-li" target="_blank">Beichen Li</a>,
        			<a href="http://www-mtl.mit.edu/wpmu/tpalacios/" target="_blank">Tomas Palacios</a>,
        			<a href="https://groups.csail.mit.edu/vision/torralbalab/" target="_blank">Antonio Torralba</a>, and
        			<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Learning Human-environment Interactions using Conformal Tactile Textiles</font></b><br>
				<b><a href="https://www.nature.com/natelectron/" target="_blank">Nature Electronics</a></b> 4, 193–201 (2021),
				<font color="firebrick"><b>5-year Impact Factor: 33.695</b></font>
				<br>
				<a href="http://senstextile.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.nature.com/articles/s41928-021-00558-0" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/senstextile" target="_blank"> <small>[Code]</small></a>
				<a href="projects/senstextile/senstextile.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Featured on the</small>
				<a href="https://www.nature.com/natelectron/volumes/4/issues/3" target="_blank"> <small>cover</small></a>
				<small>of the issue.</small>
				<small>Editorial comments</small>
				<a href="https://www.nature.com/articles/s41928-021-00567-z" target="_blank"> <small>[Link]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://www.nature.com/articles/s41928-021-00560-6" target="_blank"> <small>[Nature Electronics News & Views]</small></a>
				<a href="https://www.csail.mit.edu/news/smart-clothes-can-measure-your-movements" target="_blank"> <small>[MIT CSAIL News]</small></a>
				<a href="https://gizmodo.com/researchers-might-have-finally-cracked-smart-clothing-1846546202" target="_blank"> <small>[Gizmodo]</small></a>
				<a href="https://www.engadget.com/mit-csail-smart-clothes-track-movements-160010512.html" target="_blank"> <small>[Engadget]</small></a>
				<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/v-cdn/v-cdn.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>,
				<a href="http://tensorlab.cms.caltech.edu/users/anima/" target="_blank">Animashree Anandkumar</a>,
				<a href="https://homes.cs.washington.edu/~fox/" target="_blank">Dieter Fox</a>, and
				<a href="https://animesh.garg.tech/" target="_blank">Animesh Garg</a>
				<br>
				<b><font color="black">Causal Discovery in Physical Systems from Videos</font></b><br>
				<b><a href="https://nips.cc/Conferences/2020" target="_blank">NeurIPS 2020</a></b>,
				<a href="https://yunzhuli.github.io/www/V-CDN/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2007.00631" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/pairlab/v-cdn" target="_blank"> <small>[Code]</small></a>
				<a href="https://www.youtube.com/watch?v=hRsCt8xLn_8" target="_blank"> <small>[Video]</small></a>
				<a href="https://yunzhuli.github.io/www/V-CDN/poster.pdf" target="_blank"> <small>[Poster]</small></a>
				<a href="https://yunzhuli.github.io/www/V-CDN/V-CDN.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://venturebeat.com/2020/07/02/ai-system-learns-to-model-how-fabrics-interact-by-watching-videos/" target="_blank"> <small>[VentureBeat]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/key_dynam/key_dynam.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="http://lucasmanuelli.com/" target="_blank">Lucas Manuelli</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://www.peteflorence.com/" target="_blank">Pete Florence</a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Keypoints into the Future: Self-Supervised Correspondence in Model-Based Reinforcement Learning</font></b><br>
				<b><a href="https://www.robot-learning.org/" target="_blank">CoRL 2020</a></b>,
				<a href="https://sites.google.com/view/keypointsintothefuture" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2009.05085" target="_blank"> <small>[Paper]</small></a>
				<a href="https://www.youtube.com/watch?v=qxC7XS4eFFw" target="_blank"> <small>[Video]</small></a>
				<a href="projects/key_dynam/key_dynam.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/compkpm/compkpm.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>*,
				<a href="http://people.csail.mit.edu/hehaodele/" target="_blank">Hao He</a>*,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="http://people.csail.mit.edu/dina/" target="_blank">Dina Katabi</a>, and
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Learning Compositional Koopman Operators for Model-Based Control</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2020" target="_blank">ICLR 2020</a></b>,
				<a href="http://koopman.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=H1ldzA4tPr" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/CompositionalKoopmanOperators" target="_blank"><small>[Code]</small></a>
				<a href="projects/compkpm/compkpm.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="https://youtu.be/MnXo_hjh1Q4" target="_blank"> <small>[Video]</small></a>
				<a href="http://koopman.csail.mit.edu/poster.pdf" target="_blank"> <small>[Poster]</small></a><br>
				<font color="firebrick"><b>Spotlight Presentation (Top 6.0%)</b></font><br>
				Abridged in <b>NeurIPS 2019</b> workshop on Graph Representation Learning <a href="https://grlearning.github.io/papers/" target="_blank"><small>[Link]</small></a>

				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/stag/stag_lowres.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://people.csail.mit.edu/subras/" target="_blank">Subramanian Sundaram</a>,
				<a href="https://people.csail.mit.edu/pkellnho/" target="_blank">Petr Kellnhofer</a>,
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>,
				<a href="https://people.csail.mit.edu/junyanz/" target="_blank">Jun-Yan Zhu</a>,
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>, and
				<a href="https://people.csail.mit.edu/wojciech/" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Learning the Signatures of the Human Grasp Using a Scalable Tactile Glove</font></b><br>
				<b><a href="https://www.nature.com/" target="_blank">Nature</a></b> 569, 698–702 (2019),
				<font color="firebrick"><b>5-year Impact Factor: 54.637</b></font>
				<br>
				<a href="http://stag.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.nature.com/articles/s41586-019-1234-z" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/Erkil1452/touch" target="_blank"> <small>[Code]</small></a>
				<a href="http://stag.csail.mit.edu/files/sundaram2019stag.bib" target="_blank"> <small>[BibTex]</small></a>,

				<small>Collected by</small>
				<a href="projects/stag/stag_mit_museum.jpg" target="_blank"> <small>MIT Museum</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/sensor-glove-human-grasp-robotics-0529" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.nature.com/articles/d41586-019-01593-w" target="_blank"> <small>[Nature News & Views]</small></a>
				<a href="https://devicematerialscommunity.nature.com/users/257334-subramanian-sundaram/posts/49420-learning-dexterity-from-humans" target="_blank"> <small>[Nature communities]</small></a>
				<a href="https://www.economist.com/science-and-technology/2019/05/30/improving-robots-grasp-requires-a-new-way-to-measure-it-in-humans" target="_blank"> <small>[The Economist]</small></a>
				<a href="https://www.pbs.org/wgbh/nova/article/electronic-glove-pressure-sensors/" target="_blank"> <small>[PBS NOVA]</small></a>
				<a href="https://www.bbc.co.uk/sounds/play/p079yr9y" target="_blank"> <small>[BBC Radio]</small></a>
				<a href="https://www.newscientist.com/article/2204736-smart-glove-works-out-what-youre-holding-from-its-weight-and-shape/" target="_blank"> <small>[NewScientist]</small></a>
				</div>
			</div><hr>

      			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/dpi/dpi.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2019" target="_blank">ICLR 2019</a></b>,
				<a href="http://dpi.csail.mit.edu" target="_blank"> <small>[Project]</small></a>
				<a href="http://dpi.csail.mit.edu/dpi-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/DPI-Net" target="_blank"> <small>[Code]</small></a>
				<a href="http://dpi.csail.mit.edu/dpi.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/dpi/dpi-poster.pdf" target="_blank"><small>[Poster]</small></a>
				<a href="https://www.youtube.com/watch?v=FrPpP7aW3Lg" target="_blank"> <small>[Video]</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/robots-object-manipulation-particle-simulator-0417" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.engadget.com/2019/04/21/mit-particle-simulator-helps-robots-make-sushi/" target="_blank"> <small>[Engadget]</small></a>
				<a href="https://news.developer.nvidia.com/laying-the-foundation-for-better-object-manipulation-in-robotics/" target="_blank"> <small>[NVIDIA Developer]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/infogail/infogail.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://tsong.me/" target="_blank">Jiaming Song</a>, and
				<a href="http://cs.stanford.edu/~ermon/" target="_blank">Stefano Ermon</a>
				<br>
				<b><font color="black">InfoGAIL: Interpretable Imitation Learning from Visual Demonstrations</font></b><br>
				<b><a href="https://nips.cc/Conferences/2017" target="_blank">NIPS 2017</a></b>,
				<a href="projects/infogail/infogail-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/InfoGAIL" target="_blank"> <small>[Code]</small></a>
				<a href="projects/infogail/infogail.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/infogail/infogail-poster.pdf" target="_blank"><small>[Poster]</small></a>
				<a href="https://www.youtube.com/watch?v=YtNPBAW6h5k" target="_blank"> <small>[Video]</small></a>
				</div>
			</div><hr>

		</script>


		<script id="pubs_by_date" language="text">
		  <font color="black">(* indicates equal contribution)</font><br><hr>

      <div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/actionosf/actionosf.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://s-tian.github.io/" target="_blank">Stephen Tian</a>*,
        <a href="">Yancheng Cai</a>*,
        <a href="https://kovenyu.com/" target="_blank">Hong-Xing Yu</a>,
				<a href="https://zakharos.github.io/" target="_blank">Sergey Zakharov</a>,
        <a href="https://www.thekatherineliu.com/" target="_blank">Katherine Liu</a>,
				<a href="https://adriengaidon.com/" target="_blank">Adrien Gaidon</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>
				<br>
				<b><font color="black">Multi-Object Manipulation via Object-Centric Neural Scattering Functions</font></b><br>
				<b><a href="https://cvpr2023.thecvf.com/" target="_blank">CVPR 2023</a></b>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/objectfolderbenchmark/objectfolderbenchmark.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://ai.stanford.edu/~rhgao/" target="_blank">Ruohan Gao</a>*,
        <a href="https://dou-yiming.github.io/" target="_blank">Yiming Dou</a>*,
        <a href="https://haolirobo.github.io/" target="_blank">Hao Li</a>*,
				<a href="https://tanmay-agarwal.com/" target="_blank">Tanmay Agarwal</a>,
        <a href="http://web.stanford.edu/~bohg/" target="_blank">Jeannette Bohg</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
        <a href="https://profiles.stanford.edu/fei-fei-li/" target="_blank">Li Fei-Fei</a>, and
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>
				<br>
				<b><font color="black">The ObjectFolder Benchmark: Multisensory Learning with Neural and Real Objects</font></b><br>
				<b><a href="https://cvpr2023.thecvf.com/" target="_blank">CVPR 2023</a></b>,
				<a href="https://objectfolder.stanford.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.objectfolder.org/swan_vis/" target="_blank"> <small>[Demo]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/dec-ssl/dec-ssl.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://www.csail.mit.edu/person/lirui-wang" target="_blank">Lirui Wang</a>,
				<a href="https://kzhang66.github.io/" target="_blank">Kaiqing Zhang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://scholar.google.com/citations?user=OsP7JHAAAAAJ&hl=en" target="_blank">Yonglong Tian</a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Does Learning from Decentralized Non-IID Unlabeled Data Benefit from Self Supervision?</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2023" target="_blank">ICLR 2023</a></b>,
				<a href="https://arxiv.org/abs/2210.10947" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/liruiw/Dec-SSL" target="_blank"> <small>[Code]</small></a>
				<a href="https://www.youtube.com/watch?v=CbSGwsihnEk" target="_blank"> <small>[Video]</small></a>
				<a href="projects/dec-ssl/dec-ssl.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

		  <div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/comp_nerf_dy/combined.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://dannydriess.github.io/" target="_blank">Danny Driess</a>,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>, and
				<a href="https://www.user.tu-berlin.de/mtoussai/" target="_blank">Marc Toussaint</a>
				<br>
				<b><font color="black">Learning Multi-Object Dynamics with Compositional Neural Radiance Fields</font></b><br>
				<b><a href="https://corl2022.org/" target="_blank">CoRL 2022</a></b>,
				<a href="https://dannydriess.github.io/compnerfdyn/index.html" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://openreview.net/forum?id=qUvTmyGpnm7" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/comp_nerf_dy/comp_nerf_dy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/pasta/PASTA_bright.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://xingyu-lin.github.io/" target="_blank">Xingyu Lin</a>*,
				<a href="https://www.linkedin.com/in/carlqi/" target="_blank">Carl Qi</a>*,
				<a href="https://yunchuzhang.github.io/" target="_blank">Yunchu Zhang</a>,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://www.cs.cmu.edu/~katef/" target="_blank">Katerina Fragkiadaki</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>, and
				<a href="https://davheld.github.io/" target="_blank">David Held</a>
				<br>
				<b><font color="black">Planning with Spatial-Temporal Abstraction from Point Clouds for Deformable Object Manipulation</font></b><br>
				<b><a href="https://corl2022.org/" target="_blank">CoRL 2022</a></b>,
				<a href="https://sites.google.com/view/pasta-plan" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://openreview.net/forum?id=tyxyBj2w4vw" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/pasta/pasta.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/nerf-rl/nerf-rl.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://dannydriess.github.io/" target="_blank">Danny Driess</a>,
				<a href="https://ingmarschubert.com/" target="_blank">Ingmar Schubert</a>,
				<a href="https://www.peteflorence.com/" target="_blank">Pete Florence</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="https://www.user.tu-berlin.de/mtoussai/" target="_blank">Marc Toussaint</a>
				<br>
				<b><font color="black">Reinforcement Learning with Neural Radiance Fields</font></b><br>
				<b><a href="https://neurips.cc/Conferences/2022" target="_blank">NeurIPS 2022</a></b>,
				<a href="https://dannydriess.github.io/nerf-rl/index.html" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://dannydriess.github.io/papers/22-driess-NeRF-RL-preprint.pdf" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/nerf-rl/nerf-rl.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/ActionSense/ActionSense.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://www.josephdelpreto.com/" target="_blank">Joseph DelPreto</a>*,
				<a href="https://chaoliu.tech/" target="_blank">Chao Liu</a>*,
				<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
        			<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>,
        			<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>, and
				<a href="https://danielarus.csail.mit.edu/" target="_blank">Daniela Rus</a>
				<br>
				<b><font color="black">ActionSense: A Multimodal Dataset and Recording Framework for Human Activities Using Wearable Sensors in a Kitchen Environment</font></b><br>
				<b><a href="https://neurips.cc/Conferences/2022" target="_blank">NeurIPS 2022 Datasets and Benchmarks</a></b>,
				<a href="https://action-net.csail.mit.edu/" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://openreview.net/forum?id=olvz0gAdGOX" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/ActionSense/ActionSense.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/robocraft/robocraft.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://hshi74.github.io/" target="_blank">Haochen Shi</a>*,
				<a href="http://hxu.rocks/" target="_blank">Huazhe Xu</a>*,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>
				<br>
				<b><font color="black">RoboCraft: Learning to See, Simulate, and Shape Elasto-Plastic Objects with Graph Networks</font></b><br>
				<b><a href="https://roboticsconference.org/" target="_blank">RSS 2022</a></b>,
				<a href="http://hxu.rocks/robocraft/" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://arxiv.org/abs/2205.02909" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/hshi74/RoboCraft" target="_blank"> <small>[Code]</small></a>
				<a href="projects/robocraft/robocraft.bib" target="_blank"> <small>[BibTex]</small></a><br>
				Abridged in <b>ICRA 2022</b> workshop on Representing and Manipulating Deformable Objects <a href="https://deformable-workshop.github.io/icra2022/" target="_blank"><small>[Link]</small></a><br>
				<small>Covered by</small>
				<a href="https://news.mit.edu/2022/robots-play-play-dough-0623" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.newscientist.com/article/2325970-ai-powered-robot-learned-to-make-letters-out-of-play-doh-on-its-own/" target="_blank"> <small>[NewScientist]</small></a>
				<a href="https://techcrunch.com/2022/06/23/a-quick-trip-to-mars/" target="_blank"> <small>[TechCrunch]</small></a>
				<a href="https://hai.stanford.edu/news/training-robot-shape-letters-play-doh" target="_blank"> <small>[Stanford HAI]</small></a>

				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/TRO_multiobj_manip/TRO_multiobj_manip.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://scholar.google.com/citations?user=0KfKHOsAAAAJ&hl=en" target="_blank">Zherong Pan</a>,
				<a href="https://andyzeng.github.io/" target="_blank">Andy Zeng</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://arc-l.github.io/" target="_blank">Jingjin Yu</a>, and
				<a href="https://kkhauser.web.illinois.edu/" target="_blank">Kris Hauser</a>
				<br>
				<b><font color="black">Algorithms and Systems for Manipulating Multiple Objects</font></b><br>
				<b><a href="https://www.ieee-ras.org/publications/t-ro" target="_blank">T-RO 2022</a></b>,
				<a href="https://ieeexplore.ieee.org/abstract/document/9893496" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/TRO_multiobj_manip/TRO_multiobj_manip.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/diffskill/DiffSkill-compressed.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://xingyu-lin.github.io/" target="_blank">Xingyu Lin</a>,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>,
				<a href="https://davheld.github.io/" target="_blank">David Held</a>, and
				<a href="http://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>
				<br>
				<b><font color="black">DiffSkill: Skill Abstraction from Differentiable Physics for Deformable Object Manipulations with Tools</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2022" target="_blank">ICLR 2022</a></b>,
				<a href="https://xingyu-lin.github.io/diffskill/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=Kef8cKdHWpP" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/diffskill/DiffSkill.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://news.mit.edu/2022/robotic-deformable-object-0331" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://techcrunch.com/2022/03/31/better-learning-through-complex-dough-manipulation/" target="_blank"> <small>[TechCrunch]</small></a>
				<a href="https://bdtechtalks.com/2022/05/09/diffskill-robotics-deformable-object-manipulation/" target="_blank"> <small>[TechTalks]</small></a>
				<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/comphy/ComPhy.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://zfchenunique.github.io/" target="_blank">Zhenfang Chen</a>,
				<a href="https://scholar.google.com/citations?user=SwxS_JkAAAAJ&hl=en" target="_blank">Kexin Yi</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://dingmyu.github.io/" target="_blank">Mingyu Ding</a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>
				<br>
				<b><font color="black">ComPhy: Compositional Physical Reasoning of Objects and Events from Videos</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2022" target="_blank">ICLR 2022</a></b>,
				<a href="https://comphyreasoning.github.io/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=PgNEYaIc81Q" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/comphy/ComPhy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/DAIS/DAIS.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://www.csail.mit.edu/person/lujie-yang" target="_blank">Lujie Yang</a>,
				<a href="https://kzhang66.github.io/" target="_blank">Kaiqing Zhang</a>,
				<a href="https://alexandreamice.github.io/" target="_blank">Alexandre Amice</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Discrete Approximate Information States in Partially Observable Environments</font></b><br>
				<b><a href="https://acc2022.a2c2.org/" target="_blank">ACC 2022</a></b>,
				<a href="projects/DAIS/DAIS.pdf" target="_blank"> <small>[Paper]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/nerf-dy/nerf-dy-multiview.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
				<a href="https://people.csail.mit.edu/lishuang/" target="_blank">Shuang Li</a>*,
				<a href="https://vsitzmann.github.io/" target="_blank">Vincent Sitzmann</a>,
				<a href="https://people.csail.mit.edu/pulkitag/" target="_blank">Pulkit Agrawal</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">3D Neural Scene Representations for Visuomotor Control</font></b><br>
				<b><a href="https://www.robot-learning.org/" target="_blank">CoRL 2021</a></b>,
				<a href="https://3d-representation-learning.github.io/nerf-dy/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2107.04004" target="_blank"> <small>[Paper]</small></a>
				<a href="https://youtu.be/ELPMiifELGc" target="_blank"> <small>[Video]</small></a>
				<a href="https://openreview.net/forum?id=zv3NYgRZ7Qo" target="_blank"> <small>[OpenReview]</small></a>
				<a href="https://3d-representation-learning.github.io/nerf-dy/nerf-dy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				<font color="firebrick"><b>Oral Presentation (Top 6.5%)</b></font><br>
				Abridged in <b>RSS 2021</b> workshop on Visual Learning and Reasoning for Robotics <a href="https://rssvlrr.github.io/" target="_blank"><small>[Link]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/senstextile/senstextile.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
        			<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
        			<a href="https://pratyushasharma.github.io/" target="_blank">Pratyusha Sharma</a>,
        			<a href="https://www.csail.mit.edu/person/wan-shou" target="_blank">Wan Shou</a>,
        			<a href="http://people.csail.mit.edu/kuiwu" target="_blank">Kui Wu</a>,
        			<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
        			<a href="https://www.csail.mit.edu/person/beichen-li" target="_blank">Beichen Li</a>,
        			<a href="http://www-mtl.mit.edu/wpmu/tpalacios/" target="_blank">Tomas Palacios</a>,
        			<a href="https://groups.csail.mit.edu/vision/torralbalab/" target="_blank">Antonio Torralba</a>, and
        			<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Learning Human-environment Interactions using Conformal Tactile Textiles</font></b><br>
				<b><a href="https://www.nature.com/natelectron/" target="_blank">Nature Electronics</a></b> 4, 193–201 (2021),
				<font color="firebrick"><b>5-year Impact Factor: 33.695</b></font>
				<br>
				<a href="http://senstextile.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.nature.com/articles/s41928-021-00558-0" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/senstextile" target="_blank"> <small>[Code]</small></a>
				<a href="projects/senstextile/senstextile.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Featured on the</small>
				<a href="https://www.nature.com/natelectron/volumes/4/issues/3" target="_blank"> <small>cover</small></a>
				<small>of the issue.</small>
				<small>Editorial comments</small>
				<a href="https://www.nature.com/articles/s41928-021-00567-z" target="_blank"> <small>[Link]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://www.nature.com/articles/s41928-021-00560-6" target="_blank"> <small>[Nature Electronics News & Views]</small></a>
				<a href="https://www.csail.mit.edu/news/smart-clothes-can-measure-your-movements" target="_blank"> <small>[MIT CSAIL News]</small></a>
				<a href="https://gizmodo.com/researchers-might-have-finally-cracked-smart-clothing-1846546202" target="_blank"> <small>[Gizmodo]</small></a>
				<a href="https://www.engadget.com/mit-csail-smart-clothes-track-movements-160010512.html" target="_blank"> <small>[Engadget]</small></a>
				<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/phystouch/phystouch.jpeg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
					<a href="https://github.com/sjtuzq" target="_blank">Qiang Zhang</a>*,
					<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
					<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
					<a href="https://showone90.wixsite.com/show" target="_blank">Wan Shou</a>,
					<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
					<a href="https://thinklab.sjtu.edu.cn/" target="_blank">Junchi Yan</a>,
					<a href="https://scholar.google.com/citations?user=rRJ9wTJMUB8C&hl=en" target="_blank">Joshua B. Tenenbaum</a>,
					<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>, and
					<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
					<br>
					<b><font color="black">Dynamic Modeling of Hand-Object Interactions via Tactile Sensing</font></b><br>
					<b><a href="https://www.iros2021.org/" target="_blank">IROS 2021</a></b>,
					<a href="http://phystouch.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
					<a href="https://arxiv.org/abs/2109.04378" target="_blank"> <small>[Paper]</small></a>
					<a href="https://www.youtube.com/watch?v=rBN5kNOw5Y8" target="_blank"> <small>[Video]</small></a>
					<a href="projects/phystouch/phystouch.bib" target="_blank"> <small>[BibTex]</small></a>
					<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/intcarpet/logo.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
        			<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
        			<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
        			<a href="https://www.csail.mit.edu/person/wan-shou" target="_blank">Wan Shou</a>,
        			<a href="https://pratyushasharma.github.io/" target="_blank">Pratyusha Sharma</a>,
        			<a href="http://www-mtl.mit.edu/wpmu/tpalacios/" target="_blank">Tomas Palacios</a>,
        			<a href="https://groups.csail.mit.edu/vision/torralbalab/" target="_blank">Antonio Torralba</a>, and
        			<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Intelligent Carpet: Inferring 3D Human Pose from Tactile Signals</font></b><br>
				<b><a href="http://cvpr2021.thecvf.com/" target="_blank">CVPR 2021</a></b>,
				<a href="http://intcarpet.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Luo_Intelligent_Carpet_Inferring_3D_Human_Pose_From_Tactile_Signals_CVPR_2021_paper.pdf" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/yiyueluo/IntelligentCarpet" target="_blank"> <small>[Code]</small></a>
				<a href="https://www.youtube.com/watch?v=U6svj37h2U4" target="_blank"> <small>[Video]</small></a>
				<a href="projects/intcarpet/intcarpet.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://news.mit.edu/2021/intelligent-carpet-gives-insight-human-poses-0624" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.fastcompany.com/90648670/this-magic-carpet-can-track-your-workout" target="_blank"> <small>[Fast Company]</small></a>
				<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/v-cdn/v-cdn.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>,
				<a href="http://tensorlab.cms.caltech.edu/users/anima/" target="_blank">Animashree Anandkumar</a>,
				<a href="https://homes.cs.washington.edu/~fox/" target="_blank">Dieter Fox</a>, and
				<a href="https://animesh.garg.tech/" target="_blank">Animesh Garg</a>
				<br>
				<b><font color="black">Causal Discovery in Physical Systems from Videos</font></b><br>
				<b><a href="https://nips.cc/Conferences/2020" target="_blank">NeurIPS 2020</a></b>,
				<a href="https://yunzhuli.github.io/www/V-CDN/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2007.00631" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/pairlab/v-cdn" target="_blank"> <small>[Code]</small></a>
				<a href="https://www.youtube.com/watch?v=hRsCt8xLn_8" target="_blank"> <small>[Video]</small></a>
				<a href="https://yunzhuli.github.io/www/V-CDN/poster.pdf" target="_blank"> <small>[Poster]</small></a>
				<a href="https://yunzhuli.github.io/www/V-CDN/V-CDN.bib" target="_blank"> <small>[BibTex]</small></a>
			  <br>
				<small>Covered by</small>
				<a href="https://venturebeat.com/2020/07/02/ai-system-learns-to-model-how-fabrics-interact-by-watching-videos/" target="_blank"> <small>[VentureBeat]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/physical_scene_graphs/physical_scene_graphs.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://scholar.google.com/citations?user=uYbkEzYAAAAJ&hl=en" target="_blank">Daniel M. Bear</a>,
				<a href="https://scholar.google.com/citations?user=YM4x068AAAAJ&hl=en" target="_blank">Chaofei Fan</a>,
				<a href="https://scholar.google.com/citations?user=GADXPDcAAAAJ&hl=en" target="_blank">Damian Mrowca</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://bcs.mit.edu/users/altersmitedu" target="_blank">Seth Alter</a>,
				<a href="https://sites.google.com/site/anayebihomepage/" target="_blank">Aran Nayebi</a>,
				<a href="https://bcs-r1.mit.edu/users/jeremyesmitedu" target="_blank">Jeremy Schwartz</a>,
				<a href="http://vision.stanford.edu/people.html" target="_blank">Li Fei-Fei</a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://stanford.edu/~yamins/" target="_blank">Daniel L. K. Yamins</a>
				<br>
				<b><font color="black">Learning Physical Graph Representations from Visual Scenes</font></b><br>
				<b><a href="https://nips.cc/Conferences/2020" target="_blank">NeurIPS 2020</a></b>,
				<a href="https://neuroailab.github.io/physical-scene-graphs/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2006.12373" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/physical_scene_graphs/physical_scene_graphs.bib" target="_blank"> <small>[BibTex]</small></a><br>
				<font color="firebrick"><b>Oral Presentation (Top 1.1%)</b></font><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/key_dynam/key_dynam.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="http://lucasmanuelli.com/" target="_blank">Lucas Manuelli</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://www.peteflorence.com/" target="_blank">Pete Florence</a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Keypoints into the Future: Self-Supervised Correspondence in Model-Based Reinforcement Learning</font></b><br>
				<b><a href="https://www.robot-learning.org/" target="_blank">CoRL 2020</a></b>,
				<a href="https://sites.google.com/view/keypointsintothefuture" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2009.05085" target="_blank"> <small>[Paper]</small></a>
				<a href="https://www.youtube.com/watch?v=qxC7XS4eFFw" target="_blank"> <small>[Video]</small></a>
				<a href="projects/key_dynam/key_dynam.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/visual_grounding/visual_grounding.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://scholar.google.com/citations?user=Rxb7o6IAAAAJ&hl=en" target="_blank">Toru Lin</a>*,
				<a href="https://scholar.google.com/citations?user=SwxS_JkAAAAJ&hl=en" target="_blank">Kexin Yi</a>*,
				<a href="https://scholar.google.com/citations?user=uYbkEzYAAAAJ&hl=en" target="_blank">Daniel M. Bear</a>,
				<a href="http://stanford.edu/~yamins/" target="_blank">Daniel L. K. Yamins</a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Visual Grounding of Learned Physical Models</font></b><br>
				<b><a href="https://icml.cc/Conferences/2020" target="_blank">ICML 2020</a></b>,
				<a href="http://visual-physics-grounding.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2004.13664" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/VGPL" target="_blank"><small>[Code]</small></a>
				<a href="projects/visual_grounding/vgpl.bib" target="_blank"> <small>[BibTex]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/compkpm/compkpm.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>*,
				<a href="http://people.csail.mit.edu/hehaodele/" target="_blank">Hao He</a>*,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="http://people.csail.mit.edu/dina/" target="_blank">Dina Katabi</a>, and
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Learning Compositional Koopman Operators for Model-Based Control</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2020" target="_blank">ICLR 2020</a></b>,
				<a href="http://koopman.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=H1ldzA4tPr" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/CompositionalKoopmanOperators" target="_blank"><small>[Code]</small></a>
				<a href="projects/compkpm/compkpm.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="https://youtu.be/MnXo_hjh1Q4" target="_blank"> <small>[Video]</small></a>
				<a href="http://koopman.csail.mit.edu/poster.pdf" target="_blank"> <small>[Poster]</small></a><br>
				<font color="firebrick"><b>Spotlight Presentation (Top 6.0%)</b></font><br>
				Abridged in <b>NeurIPS 2019</b> workshop on Graph Representation Learning <a href="https://grlearning.github.io/papers/" target="_blank"><small>[Link]</small></a>

				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/clevrer/clevrer.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://scholar.google.com/citations?user=SwxS_JkAAAAJ&hl=en" target="_blank">Kexin Yi</a>*,
				<a href="http://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>*,
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>,
				<a href="https://sites.google.com/site/pushmeet/" target="_blank">Pushmeet Kohli</a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>, and
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>
				<br>
				<b><font color="black">CLEVRER: Collision Events for Video Representation and Reasoning</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2020" target="_blank">ICLR 2020</a></b>,
				<a href="http://clevrer.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=HkxYzANYDB" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/clevrer/clevrer.bib" target="_blank"> <small>[BibTex]</small></a><br>
				<font color="firebrick"><b>Spotlight Presentation (Top 6.0%)</b></font><br>

				<small>Covered by</small>
				<a href="https://www.youtube.com/watch?v=bVXPnP8k6yo" target="_blank"> <small>[Two Minute Papers]</small></a>
				<a href="https://www.technologyreview.com/2020/03/06/905479/ai-neuro-symbolic-system-reasons-like-child-deepmind-ibm-mit/" target="_blank"> <small>[MIT Technology Review]</small></a>
				<a href="https://www.wired.com/story/ai-smart-cant-grasp-cause-effect/" target="_blank"> <small>[WIRED]</small></a>
				<a href="https://venturebeat.com/2020/02/26/researchers-apply-developmental-psychology-to-ai-model-that-predicts-object-relationships/" target="_blank"> <small>[VentureBeat]</small></a>

				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/stag/stag_lowres.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://people.csail.mit.edu/subras/" target="_blank">Subramanian Sundaram</a>,
				<a href="https://people.csail.mit.edu/pkellnho/" target="_blank">Petr Kellnhofer</a>,
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>,
				<a href="https://people.csail.mit.edu/junyanz/" target="_blank">Jun-Yan Zhu</a>,
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>, and
				<a href="https://people.csail.mit.edu/wojciech/" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Learning the Signatures of the Human Grasp Using a Scalable Tactile Glove</font></b><br>
				<b><a href="https://www.nature.com/" target="_blank">Nature</a></b> 569, 698–702 (2019),
				<font color="firebrick"><b>5-year Impact Factor: 54.637</b></font>
				<br>
				<a href="http://stag.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.nature.com/articles/s41586-019-1234-z" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/Erkil1452/touch" target="_blank"> <small>[Code]</small></a>
				<a href="http://stag.csail.mit.edu/files/sundaram2019stag.bib" target="_blank"> <small>[BibTex]</small></a>,

				<small>Collected by</small>
				<a href="projects/stag/stag_mit_museum.jpg" target="_blank"> <small>MIT Museum</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/sensor-glove-human-grasp-robotics-0529" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.nature.com/articles/d41586-019-01593-w" target="_blank"> <small>[Nature News & Views]</small></a>
				<a href="https://devicematerialscommunity.nature.com/users/257334-subramanian-sundaram/posts/49420-learning-dexterity-from-humans" target="_blank"> <small>[Nature communities]</small></a>
				<a href="https://www.economist.com/science-and-technology/2019/05/30/improving-robots-grasp-requires-a-new-way-to-measure-it-in-humans" target="_blank"> <small>[The Economist]</small></a>
				<a href="https://www.pbs.org/wgbh/nova/article/electronic-glove-pressure-sensors/" target="_blank"> <small>[PBS NOVA]</small></a>
				<a href="https://www.bbc.co.uk/sounds/play/p079yr9y" target="_blank"> <small>[BBC Radio]</small></a>
				<a href="https://www.newscientist.com/article/2204736-smart-glove-works-out-what-youre-holding-from-its-weight-and-shape/" target="_blank"> <small>[NewScientist]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/visgel/visgel.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://people.csail.mit.edu/junyanz/" target="_blank">Jun-Yan Zhu</a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Connecting Touch and Vision via Cross-Modal Prediction</font></b><br>
				<b><a href="http://cvpr2019.thecvf.com/" target="_blank">CVPR 2019</a></b>,
				<a href="http://visgel.csail.mit.edu" target="_blank"> <small>[Project]</small></a>
				<a href="http://visgel.csail.mit.edu/visgel-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/VisGel" target="_blank"><small>[Code]</small></a>
				<a href="http://visgel.csail.mit.edu/visgel.bib" target="_blank"> <small>[BibTex]</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/teaching-ai-to-connect-senses-vision-touch-0617" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.bbc.com/news/av/technology-48711479/robot-taught-to-feel-objects-by-sight-and-other-news" target="_blank"> <small>[BBC]</small></a>
				<a href="https://www.cnn.com/2019/06/17/us/mit-robot-vision-touch-trnd/index.html" target="_blank"> <small>[CNN]</small></a>
				<a href="https://www.forbes.com/sites/charlestowersclark/2019/06/17/one-step-closer-to-human-intelligence-mit-csail-combine-sight-and-touch-in-ai/#3496256578b6" target="_blank"> <small>[Forbes]</small></a>
				<a href="https://techcrunch.com/2019/06/17/mit-develops-a-system-to-give-robots-more-human-senses/" target="_blank"> <small>[TechCrunch]</small></a>
				<a href="https://www.fastcompany.com/90365007/a-new-robot-can-now-identify-objects-by-touch" target="_blank"> <small>[Fast Company]</small></a>
				<a href="https://www.engadget.com/2019/06/17/robot-identify-sight-touch/" target="_blank"> <small>[Engadget]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/dpi/dpi.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2019" target="_blank">ICLR 2019</a></b>,
				<a href="http://dpi.csail.mit.edu" target="_blank"> <small>[Project]</small></a>
				<a href="http://dpi.csail.mit.edu/dpi-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/DPI-Net" target="_blank"> <small>[Code]</small></a>
				<a href="http://dpi.csail.mit.edu/dpi.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/dpi/dpi-poster.pdf" target="_blank"><small>[Poster]</small></a>
				<a href="https://www.youtube.com/watch?v=FrPpP7aW3Lg" target="_blank"> <small>[Video]</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/robots-object-manipulation-particle-simulator-0417" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.engadget.com/2019/04/21/mit-particle-simulator-helps-robots-make-sushi/" target="_blank"> <small>[Engadget]</small></a>
				<a href="https://news.developer.nvidia.com/laying-the-foundation-for-better-object-manipulation-in-robotics/" target="_blank"> <small>[NVIDIA Developer]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/propnet/propnet-1.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="http://people.csail.mit.edu/junyanz/" target="_blank">Jun-Yan Zhu</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Propagation Networks for Model-Based Control Under Partial Observation</font></b><br>
				<b><a href="https://www.icra2019.org/" target="_blank">ICRA 2019</a></b>,
				<a href="http://propnet.csail.mit.edu" target="_blank"> <small>[Project]</small></a>
				<a href="http://propnet.csail.mit.edu/propnet-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/PropNet" target="_blank"><small>[Code]</small></a>
				<a href="http://propnet.csail.mit.edu/propnet.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="https://www.youtube.com/watch?v=ZAxHXegkz48" target="_blank"> <small>[Video]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/infogail/infogail.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://tsong.me/" target="_blank">Jiaming Song</a>, and
				<a href="http://cs.stanford.edu/~ermon/" target="_blank">Stefano Ermon</a>
				<br>
				<b><font color="black">InfoGAIL: Interpretable Imitation Learning from Visual Demonstrations</font></b><br>
				<b><a href="https://nips.cc/Conferences/2017" target="_blank">NIPS 2017</a></b>,
				<a href="projects/infogail/infogail-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/InfoGAIL" target="_blank"> <small>[Code]</small></a>
				<a href="projects/infogail/infogail.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/infogail/infogail-poster.pdf" target="_blank"><small>[Poster]</small></a>
				<a href="https://www.youtube.com/watch?v=YtNPBAW6h5k" target="_blank"> <small>[Video]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/skin/detection_tracking.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
				<a href="http://cs.stanford.edu/people/esteva/home/index.html" target="_blank">Andre Esteva</a>*,
				<a href="https://stanford.edu/~kuprel/" target="_blank">Brett Kuprel</a>,
				<a href="https://profiles.stanford.edu/roberto-novoa" target="_blank">Rob Novoa</a>,
				<a href="https://profiles.stanford.edu/justin-ko" target="_blank">Justin Ko</a>, and
				<a href="http://robots.stanford.edu/" target="_blank">Sebastian Thrun</a>
				<br>
				<b><font color="black">Skin Cancer Detection and Tracking using Data Synthesis and Deep Learning</font></b><br>
				<a href="https://nips.cc/Conferences/2016" target="_blank"><b>NIPS 2016</b> Workshop on Machine Learning for Health</a><br>
				<a href="http://w3phiai2017.w3phi.com/" target="_blank"><b>AAAI 2017</b> Joint Workshop on Health Intelligence</a><br>
				<a href="projects/skin/detection_tracking-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="projects/skin/skin.bib" target="_blank"> <small>[BibTex]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/conv3d/face_detection_conv3d.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
				Benyuan Sun*,
				<a href="http://www.stat.ucla.edu/~tfwu/" target="_blank">Tianfu Wu</a>, and
				<a href="http://www.idm.pku.edu.cn/staff/wangyizhou/" target="_blank">Yizhou Wang</a>
				<br>
				<b><font color="black">Face Detection with End-to-End Integration of a ConvNet and a 3D Model</font></b><br>
				<b><a href="http://www.eccv2016.org/" target="_blank">ECCV 2016</a></b>,
				<a href="projects/conv3d/face_detection_conv3d-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/tfwu/FaceDetection-ConvNet-3D" target="_blank"> <small>[Code]</small></a>
				<a href="projects/conv3d/conv3d.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/conv3d/face_detection_conv3d-poster.pdf" target="_blank"> <small>[Poster]</small></a>
				</div>
			</div><hr>

		</script>


		<script id="pubs_by_topic" language="text">

			<font color="black">(* indicates equal contribution)</font><br><hr>

			<div id="dynam" style="padding-top: 80px; margin-top: -80px;">
			  <h5>Robotic Manipulation</h5>
			</div><br>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/actionosf/actionosf.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://s-tian.github.io/" target="_blank">Stephen Tian</a>*,
        <a href="">Yancheng Cai</a>*,
        <a href="https://kovenyu.com/" target="_blank">Hong-Xing Yu</a>,
				<a href="https://zakharos.github.io/" target="_blank">Sergey Zakharov</a>,
        <a href="https://www.thekatherineliu.com/" target="_blank">Katherine Liu</a>,
				<a href="https://adriengaidon.com/" target="_blank">Adrien Gaidon</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>
				<br>
				<b><font color="black">Multi-Object Manipulation via Object-Centric Neural Scattering Functions</font></b><br>
				<b><a href="https://cvpr2023.thecvf.com/" target="_blank">CVPR 2023</a></b>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/comp_nerf_dy/combined.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://dannydriess.github.io/" target="_blank">Danny Driess</a>,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>, and
				<a href="https://www.user.tu-berlin.de/mtoussai/" target="_blank">Marc Toussaint</a>
				<br>
				<b><font color="black">Learning Multi-Object Dynamics with Compositional Neural Radiance Fields</font></b><br>
				<b><a href="https://corl2022.org/" target="_blank">CoRL 2022</a></b>,
				<a href="https://dannydriess.github.io/compnerfdyn/index.html" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://openreview.net/forum?id=qUvTmyGpnm7" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/comp_nerf_dy/comp_nerf_dy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/pasta/PASTA_bright.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://xingyu-lin.github.io/" target="_blank">Xingyu Lin</a>*,
				<a href="https://www.linkedin.com/in/carlqi/" target="_blank">Carl Qi</a>*,
				<a href="https://yunchuzhang.github.io/" target="_blank">Yunchu Zhang</a>,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://www.cs.cmu.edu/~katef/" target="_blank">Katerina Fragkiadaki</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>, and
				<a href="https://davheld.github.io/" target="_blank">David Held</a>
				<br>
				<b><font color="black">Planning with Spatial-Temporal Abstraction from Point Clouds for Deformable Object Manipulation</font></b><br>
				<b><a href="https://corl2022.org/" target="_blank">CoRL 2022</a></b>,
				<a href="https://sites.google.com/view/pasta-plan" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://openreview.net/forum?id=tyxyBj2w4vw" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/pasta/pasta.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/nerf-rl/nerf-rl.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://dannydriess.github.io/" target="_blank">Danny Driess</a>,
				<a href="https://ingmarschubert.com/" target="_blank">Ingmar Schubert</a>,
				<a href="https://www.peteflorence.com/" target="_blank">Pete Florence</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="https://www.user.tu-berlin.de/mtoussai/" target="_blank">Marc Toussaint</a>
				<br>
				<b><font color="black">Reinforcement Learning with Neural Radiance Fields</font></b><br>
				<b><a href="https://neurips.cc/Conferences/2022" target="_blank">NeurIPS 2022</a></b>,
				<a href="https://dannydriess.github.io/nerf-rl/index.html" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://dannydriess.github.io/papers/22-driess-NeRF-RL-preprint.pdf" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/nerf-rl/nerf-rl.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/robocraft/robocraft.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://hshi74.github.io/" target="_blank">Haochen Shi</a>*,
				<a href="http://hxu.rocks/" target="_blank">Huazhe Xu</a>*,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>
				<br>
				<b><font color="black">RoboCraft: Learning to See, Simulate, and Shape Elasto-Plastic Objects with Graph Networks</font></b><br>
				<b><a href="https://roboticsconference.org/" target="_blank">RSS 2022</a></b>,
				<a href="http://hxu.rocks/robocraft/" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://arxiv.org/abs/2205.02909" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/hshi74/RoboCraft" target="_blank"> <small>[Code]</small></a>
				<a href="projects/robocraft/robocraft.bib" target="_blank"> <small>[BibTex]</small></a><br>
				Abridged in <b>ICRA 2022</b> workshop on Representing and Manipulating Deformable Objects <a href="https://deformable-workshop.github.io/icra2022/" target="_blank"><small>[Link]</small></a><br>
				<small>Covered by</small>
				<a href="https://news.mit.edu/2022/robots-play-play-dough-0623" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.newscientist.com/article/2325970-ai-powered-robot-learned-to-make-letters-out-of-play-doh-on-its-own/" target="_blank"> <small>[NewScientist]</small></a>
				<a href="https://techcrunch.com/2022/06/23/a-quick-trip-to-mars/" target="_blank"> <small>[TechCrunch]</small></a>
				<a href="https://hai.stanford.edu/news/training-robot-shape-letters-play-doh" target="_blank"> <small>[Stanford HAI]</small></a>

				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/TRO_multiobj_manip/TRO_multiobj_manip.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://scholar.google.com/citations?user=0KfKHOsAAAAJ&hl=en" target="_blank">Zherong Pan</a>,
				<a href="https://andyzeng.github.io/" target="_blank">Andy Zeng</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://arc-l.github.io/" target="_blank">Jingjin Yu</a>, and
				<a href="https://kkhauser.web.illinois.edu/" target="_blank">Kris Hauser</a>
				<br>
				<b><font color="black">Algorithms and Systems for Manipulating Multiple Objects</font></b><br>
				<b><a href="https://www.ieee-ras.org/publications/t-ro" target="_blank">T-RO 2022</a></b>,
				<a href="https://ieeexplore.ieee.org/abstract/document/9893496" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/TRO_multiobj_manip/TRO_multiobj_manip.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/diffskill/DiffSkill-compressed.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://xingyu-lin.github.io/" target="_blank">Xingyu Lin</a>,
				<a href="https://sites.google.com/view/zhiao-huang" target="_blank">Zhiao Huang</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>,
				<a href="https://davheld.github.io/" target="_blank">David Held</a>, and
				<a href="http://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>
				<br>
				<b><font color="black">DiffSkill: Skill Abstraction from Differentiable Physics for Deformable Object Manipulations with Tools</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2022" target="_blank">ICLR 2022</a></b>,
				<a href="https://xingyu-lin.github.io/diffskill/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=Kef8cKdHWpP" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/diffskill/DiffSkill.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://news.mit.edu/2022/robotic-deformable-object-0331" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://techcrunch.com/2022/03/31/better-learning-through-complex-dough-manipulation/" target="_blank"> <small>[TechCrunch]</small></a>
				<a href="https://bdtechtalks.com/2022/05/09/diffskill-robotics-deformable-object-manipulation/" target="_blank"> <small>[TechTalks]</small></a>
				<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/DAIS/DAIS.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://www.csail.mit.edu/person/lujie-yang" target="_blank">Lujie Yang</a>,
				<a href="https://kzhang66.github.io/" target="_blank">Kaiqing Zhang</a>,
				<a href="https://alexandreamice.github.io/" target="_blank">Alexandre Amice</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Discrete Approximate Information States in Partially Observable Environments</font></b><br>
				<b><a href="https://acc2022.a2c2.org/" target="_blank">ACC 2022</a></b>,
				<a href="projects/DAIS/DAIS.pdf" target="_blank"> <small>[Paper]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/nerf-dy/nerf-dy-multiview.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
				<a href="https://people.csail.mit.edu/lishuang/" target="_blank">Shuang Li</a>*,
				<a href="https://vsitzmann.github.io/" target="_blank">Vincent Sitzmann</a>,
				<a href="https://people.csail.mit.edu/pulkitag/" target="_blank">Pulkit Agrawal</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">3D Neural Scene Representations for Visuomotor Control</font></b><br>
				<b><a href="https://www.robot-learning.org/" target="_blank">CoRL 2021</a></b>,
				<a href="https://3d-representation-learning.github.io/nerf-dy/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2107.04004" target="_blank"> <small>[Paper]</small></a>
				<a href="https://youtu.be/ELPMiifELGc" target="_blank"> <small>[Video]</small></a>
				<a href="https://openreview.net/forum?id=zv3NYgRZ7Qo" target="_blank"> <small>[OpenReview]</small></a>
				<a href="https://3d-representation-learning.github.io/nerf-dy/nerf-dy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				<font color="firebrick"><b>Oral Presentation (Top 6.5%)</b></font><br>
				Abridged in <b>RSS 2021</b> workshop on Visual Learning and Reasoning for Robotics <a href="https://rssvlrr.github.io/" target="_blank"><small>[Link]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/key_dynam/key_dynam.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="http://lucasmanuelli.com/" target="_blank">Lucas Manuelli</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://www.peteflorence.com/" target="_blank">Pete Florence</a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Keypoints into the Future: Self-Supervised Correspondence in Model-Based Reinforcement Learning</font></b><br>
				<b><a href="https://www.robot-learning.org/" target="_blank">CoRL 2020</a></b>,
				<a href="https://sites.google.com/view/keypointsintothefuture" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2009.05085" target="_blank"> <small>[Paper]</small></a>
				<a href="https://www.youtube.com/watch?v=qxC7XS4eFFw" target="_blank"> <small>[Video]</small></a>
				<a href="projects/key_dynam/key_dynam.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/compkpm/compkpm.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>*,
				<a href="http://people.csail.mit.edu/hehaodele/" target="_blank">Hao He</a>*,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="http://people.csail.mit.edu/dina/" target="_blank">Dina Katabi</a>, and
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Learning Compositional Koopman Operators for Model-Based Control</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2020" target="_blank">ICLR 2020</a></b>,
				<a href="http://koopman.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=H1ldzA4tPr" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/CompositionalKoopmanOperators" target="_blank"><small>[Code]</small></a>
				<a href="projects/compkpm/compkpm.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="https://youtu.be/MnXo_hjh1Q4" target="_blank"> <small>[Video]</small></a>
				<a href="http://koopman.csail.mit.edu/poster.pdf" target="_blank"> <small>[Poster]</small></a><br>
				<font color="firebrick"><b>Spotlight Presentation (Top 6.0%)</b></font><br>
				Abridged in <b>NeurIPS 2019</b> workshop on Graph Representation Learning <a href="https://grlearning.github.io/papers/" target="_blank"><small>[Link]</small></a>

				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/dpi/dpi.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2019" target="_blank">ICLR 2019</a></b>,
				<a href="http://dpi.csail.mit.edu" target="_blank"> <small>[Project]</small></a>
				<a href="http://dpi.csail.mit.edu/dpi-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/DPI-Net" target="_blank"> <small>[Code]</small></a>
				<a href="http://dpi.csail.mit.edu/dpi.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/dpi/dpi-poster.pdf" target="_blank"><small>[Poster]</small></a>
				<a href="https://www.youtube.com/watch?v=FrPpP7aW3Lg" target="_blank"> <small>[Video]</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/robots-object-manipulation-particle-simulator-0417" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.engadget.com/2019/04/21/mit-particle-simulator-helps-robots-make-sushi/" target="_blank"> <small>[Engadget]</small></a>
				<a href="https://news.developer.nvidia.com/laying-the-foundation-for-better-object-manipulation-in-robotics/" target="_blank"> <small>[NVIDIA Developer]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/propnet/propnet-1.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="http://people.csail.mit.edu/junyanz/" target="_blank">Jun-Yan Zhu</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>, and
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>
				<br>
				<b><font color="black">Propagation Networks for Model-Based Control Under Partial Observation</font></b><br>
				<b><a href="https://www.icra2019.org/" target="_blank">ICRA 2019</a></b>,
				<a href="http://propnet.csail.mit.edu" target="_blank"> <small>[Project]</small></a>
				<a href="http://propnet.csail.mit.edu/propnet-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/PropNet" target="_blank"><small>[Code]</small></a>
				<a href="http://propnet.csail.mit.edu/propnet.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="https://www.youtube.com/watch?v=ZAxHXegkz48" target="_blank"> <small>[Video]</small></a>
				</div>
			</div><hr>


			<br>
			<div id="phys" style="padding-top: 80px; margin-top: -80px;">
				<h5>Physical Scene Understanding</h5>
			</div><br>

   			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/comphy/ComPhy.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://zfchenunique.github.io/" target="_blank">Zhenfang Chen</a>,
				<a href="https://scholar.google.com/citations?user=SwxS_JkAAAAJ&hl=en" target="_blank">Kexin Yi</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://dingmyu.github.io/" target="_blank">Mingyu Ding</a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>
				<br>
				<b><font color="black">ComPhy: Compositional Physical Reasoning of Objects and Events from Videos</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2022" target="_blank">ICLR 2022</a></b>,
				<a href="https://comphyreasoning.github.io/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=PgNEYaIc81Q" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/comphy/ComPhy.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/v-cdn/v-cdn.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>,
				<a href="http://tensorlab.cms.caltech.edu/users/anima/" target="_blank">Animashree Anandkumar</a>,
				<a href="https://homes.cs.washington.edu/~fox/" target="_blank">Dieter Fox</a>, and
				<a href="https://animesh.garg.tech/" target="_blank">Animesh Garg</a>
				<br>
				<b><font color="black">Causal Discovery in Physical Systems from Videos</font></b><br>
				<b><a href="https://nips.cc/Conferences/2020" target="_blank">NeurIPS 2020</a></b>,
				<a href="https://yunzhuli.github.io/www/V-CDN/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2007.00631" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/pairlab/v-cdn" target="_blank"> <small>[Code]</small></a>
				<a href="https://www.youtube.com/watch?v=hRsCt8xLn_8" target="_blank"> <small>[Video]</small></a>
				<a href="https://yunzhuli.github.io/www/V-CDN/poster.pdf" target="_blank"> <small>[Poster]</small></a>
				<a href="https://yunzhuli.github.io/www/V-CDN/V-CDN.bib" target="_blank"> <small>[BibTex]</small></a>
			  <br>
				<small>Covered by</small>
				<a href="https://venturebeat.com/2020/07/02/ai-system-learns-to-model-how-fabrics-interact-by-watching-videos/" target="_blank"> <small>[VentureBeat]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/physical_scene_graphs/physical_scene_graphs.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://scholar.google.com/citations?user=uYbkEzYAAAAJ&hl=en" target="_blank">Daniel M. Bear</a>,
				<a href="https://scholar.google.com/citations?user=YM4x068AAAAJ&hl=en" target="_blank">Chaofei Fan</a>,
				<a href="https://scholar.google.com/citations?user=GADXPDcAAAAJ&hl=en" target="_blank">Damian Mrowca</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://bcs.mit.edu/users/altersmitedu" target="_blank">Seth Alter</a>,
				<a href="https://sites.google.com/site/anayebihomepage/" target="_blank">Aran Nayebi</a>,
				<a href="https://bcs-r1.mit.edu/users/jeremyesmitedu" target="_blank">Jeremy Schwartz</a>,
				<a href="http://vision.stanford.edu/people.html" target="_blank">Li Fei-Fei</a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://stanford.edu/~yamins/" target="_blank">Daniel L. K. Yamins</a>
				<br>
				<b><font color="black">Learning Physical Graph Representations from Visual Scenes</font></b><br>
				<b><a href="https://nips.cc/Conferences/2020" target="_blank">NeurIPS 2020</a></b>,
				<a href="https://neuroailab.github.io/physical-scene-graphs/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2006.12373" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/physical_scene_graphs/physical_scene_graphs.bib" target="_blank"> <small>[BibTex]</small></a><br>
				<font color="firebrick"><b>Oral Presentation (Top 1.1%)</b></font><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/visual_grounding/visual_grounding.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="https://scholar.google.com/citations?user=Rxb7o6IAAAAJ&hl=en" target="_blank">Toru Lin</a>*,
				<a href="https://scholar.google.com/citations?user=SwxS_JkAAAAJ&hl=en" target="_blank">Kexin Yi</a>*,
				<a href="https://scholar.google.com/citations?user=uYbkEzYAAAAJ&hl=en" target="_blank">Daniel M. Bear</a>,
				<a href="http://stanford.edu/~yamins/" target="_blank">Daniel L. K. Yamins</a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Visual Grounding of Learned Physical Models</font></b><br>
				<b><a href="https://icml.cc/Conferences/2020" target="_blank">ICML 2020</a></b>,
				<a href="http://visual-physics-grounding.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://arxiv.org/abs/2004.13664" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/VGPL" target="_blank"><small>[Code]</small></a>
				<a href="projects/visual_grounding/vgpl.bib" target="_blank"> <small>[BibTex]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/clevrer/clevrer.gif" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://scholar.google.com/citations?user=SwxS_JkAAAAJ&hl=en" target="_blank">Kexin Yi</a>*,
				<a href="http://people.csail.mit.edu/ganchuang/" target="_blank">Chuang Gan</a>*,
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>,
				<a href="https://sites.google.com/site/pushmeet/" target="_blank">Pushmeet Kohli</a>,
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>,
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>, and
				<a href="https://web.mit.edu/cocosci/josh.html" target="_blank">Joshua B. Tenenbaum</a>
				<br>
				<b><font color="black">CLEVRER: Collision Events for Video Representation and Reasoning</font></b><br>
				<b><a href="https://iclr.cc/Conferences/2020" target="_blank">ICLR 2020</a></b>,
				<a href="http://clevrer.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openreview.net/forum?id=HkxYzANYDB" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/clevrer/clevrer.bib" target="_blank"> <small>[BibTex]</small></a><br>
				<font color="firebrick"><b>Spotlight Presentation (Top 6.0%)</b></font><br>

				<small>Covered by</small>
				<a href="https://www.youtube.com/watch?v=bVXPnP8k6yo" target="_blank"> <small>[Two Minute Papers]</small></a>
				<a href="https://www.technologyreview.com/2020/03/06/905479/ai-neuro-symbolic-system-reasons-like-child-deepmind-ibm-mit/" target="_blank"> <small>[MIT Technology Review]</small></a>
				<a href="https://www.wired.com/story/ai-smart-cant-grasp-cause-effect/" target="_blank"> <small>[WIRED]</small></a>
				<a href="https://venturebeat.com/2020/02/26/researchers-apply-developmental-psychology-to-ai-model-that-predicts-object-relationships/" target="_blank"> <small>[VentureBeat]</small></a>

				</div>
			</div><hr>


			<br>
			<div id="multi" style="padding-top: 80px; margin-top: -80px;">
				<h5>Multi-Modal Perception</h5>
			</div><br>

      <div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/objectfolderbenchmark/objectfolderbenchmark.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://ai.stanford.edu/~rhgao/" target="_blank">Ruohan Gao</a>*,
        <a href="https://dou-yiming.github.io/" target="_blank">Yiming Dou</a>*,
        <a href="https://haolirobo.github.io/" target="_blank">Hao Li</a>*,
				<a href="https://tanmay-agarwal.com/" target="_blank">Tanmay Agarwal</a>,
        <a href="http://web.stanford.edu/~bohg/" target="_blank">Jeannette Bohg</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
        <a href="https://profiles.stanford.edu/fei-fei-li/" target="_blank">Li Fei-Fei</a>, and
				<a href="http://jiajunwu.com" target="_blank">Jiajun Wu</a>
				<br>
				<b><font color="black">The ObjectFolder Benchmark: Multisensory Learning with Neural and Real Objects</font></b><br>
				<b><a href="https://cvpr2023.thecvf.com/" target="_blank">CVPR 2023</a></b>,
				<a href="https://objectfolder.stanford.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.objectfolder.org/swan_vis/" target="_blank"> <small>[Demo]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/ActionSense/ActionSense.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://www.josephdelpreto.com/" target="_blank">Joseph DelPreto</a>*,
				<a href="https://chaoliu.tech/" target="_blank">Chao Liu</a>*,
				<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
        			<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>,
        			<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>, and
				<a href="https://danielarus.csail.mit.edu/" target="_blank">Daniela Rus</a>
				<br>
				<b><font color="black">ActionSense: A Multimodal Dataset and Recording Framework for Human Activities Using Wearable Sensors in a Kitchen Environment</font></b><br>
				<b><a href="https://neurips.cc/Conferences/2022" target="_blank">NeurIPS 2022 Datasets and Benchmarks</a></b>,
				<a href="https://action-net.csail.mit.edu/" target="_blank"> <small>[Project & Video]</small></a>
				<a href="https://openreview.net/forum?id=olvz0gAdGOX" target="_blank"> <small>[Paper]</small></a>
				<a href="projects/ActionSense/ActionSense.bib" target="_blank"> <small>[BibTex]</small></a><br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/senstextile/senstextile.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
        			<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
        			<a href="https://pratyushasharma.github.io/" target="_blank">Pratyusha Sharma</a>,
        			<a href="https://www.csail.mit.edu/person/wan-shou" target="_blank">Wan Shou</a>,
        			<a href="http://people.csail.mit.edu/kuiwu" target="_blank">Kui Wu</a>,
        			<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
        			<a href="https://www.csail.mit.edu/person/beichen-li" target="_blank">Beichen Li</a>,
        			<a href="http://www-mtl.mit.edu/wpmu/tpalacios/" target="_blank">Tomas Palacios</a>,
        			<a href="https://groups.csail.mit.edu/vision/torralbalab/" target="_blank">Antonio Torralba</a>, and
        			<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Learning Human-environment Interactions using Conformal Tactile Textiles</font></b><br>
				<b><a href="https://www.nature.com/natelectron/" target="_blank">Nature Electronics</a></b> 4, 193–201 (2021),
				<font color="firebrick"><b>5-year Impact Factor: 33.695</b></font>
				<br>
				<a href="http://senstextile.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.nature.com/articles/s41928-021-00558-0" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/YunzhuLi/senstextile" target="_blank"> <small>[Code]</small></a>
				<a href="projects/senstextile/senstextile.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Featured on the</small>
				<a href="https://www.nature.com/natelectron/volumes/4/issues/3" target="_blank"> <small>cover</small></a>
				<small>of the issue.</small>
				<small>Editorial comments</small>
				<a href="https://www.nature.com/articles/s41928-021-00567-z" target="_blank"> <small>[Link]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://www.nature.com/articles/s41928-021-00560-6" target="_blank"> <small>[Nature Electronics News & Views]</small></a>
				<a href="https://www.csail.mit.edu/news/smart-clothes-can-measure-your-movements" target="_blank"> <small>[MIT CSAIL News]</small></a>
				<a href="https://gizmodo.com/researchers-might-have-finally-cracked-smart-clothing-1846546202" target="_blank"> <small>[Gizmodo]</small></a>
				<a href="https://www.engadget.com/mit-csail-smart-clothes-track-movements-160010512.html" target="_blank"> <small>[Engadget]</small></a>
				<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/phystouch/phystouch.jpeg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
					<a href="https://github.com/sjtuzq" target="_blank">Qiang Zhang</a>*,
					<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
					<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
					<a href="https://showone90.wixsite.com/show" target="_blank">Wan Shou</a>,
					<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
					<a href="https://thinklab.sjtu.edu.cn/" target="_blank">Junchi Yan</a>,
					<a href="https://scholar.google.com/citations?user=rRJ9wTJMUB8C&hl=en" target="_blank">Joshua B. Tenenbaum</a>,
					<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>, and
					<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
					<br>
					<b><font color="black">Dynamic Modeling of Hand-Object Interactions via Tactile Sensing</font></b><br>
					<b><a href="https://www.iros2021.org/" target="_blank">IROS 2021</a></b>,
					<a href="http://phystouch.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
					<a href="https://arxiv.org/abs/2109.04378" target="_blank"> <small>[Paper]</small></a>
					<a href="https://www.youtube.com/watch?v=rBN5kNOw5Y8" target="_blank"> <small>[Video]</small></a>
					<a href="projects/phystouch/phystouch.bib" target="_blank"> <small>[BibTex]</small></a>
					<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/intcarpet/logo.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
        			<a href="https://yyueluo.com/" target="_blank">Yiyue Luo</a>,
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
        			<a href="https://www.csail.mit.edu/person/michael-foshey" target="_blank">Michael Foshey</a>,
        			<a href="https://www.csail.mit.edu/person/wan-shou" target="_blank">Wan Shou</a>,
        			<a href="https://pratyushasharma.github.io/" target="_blank">Pratyusha Sharma</a>,
        			<a href="http://www-mtl.mit.edu/wpmu/tpalacios/" target="_blank">Tomas Palacios</a>,
        			<a href="https://groups.csail.mit.edu/vision/torralbalab/" target="_blank">Antonio Torralba</a>, and
        			<a href="https://cdfg.mit.edu/wojciech" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Intelligent Carpet: Inferring 3D Human Pose from Tactile Signals</font></b><br>
				<b><a href="http://cvpr2021.thecvf.com/" target="_blank">CVPR 2021</a></b>,
				<a href="http://intcarpet.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Luo_Intelligent_Carpet_Inferring_3D_Human_Pose_From_Tactile_Signals_CVPR_2021_paper.pdf" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/yiyueluo/IntelligentCarpet" target="_blank"> <small>[Code]</small></a>
				<a href="https://www.youtube.com/watch?v=U6svj37h2U4" target="_blank"> <small>[Video]</small></a>
				<a href="projects/intcarpet/intcarpet.bib" target="_blank"> <small>[BibTex]</small></a>
				<br>
				<small>Covered by</small>
				<a href="https://news.mit.edu/2021/intelligent-carpet-gives-insight-human-poses-0624" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.fastcompany.com/90648670/this-magic-carpet-can-track-your-workout" target="_blank"> <small>[Fast Company]</small></a>
				<br>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/stag/stag_lowres.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://people.csail.mit.edu/subras/" target="_blank">Subramanian Sundaram</a>,
				<a href="https://people.csail.mit.edu/pkellnho/" target="_blank">Petr Kellnhofer</a>,
				<a href="https://people.csail.mit.edu/liyunzhu/"><b>Yunzhu Li</b></a>,
				<a href="https://people.csail.mit.edu/junyanz/" target="_blank">Jun-Yan Zhu</a>,
				<a href="https://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>, and
				<a href="https://people.csail.mit.edu/wojciech/" target="_blank">Wojciech Matusik</a>
				<br>
				<b><font color="black">Learning the Signatures of the Human Grasp Using a Scalable Tactile Glove</font></b><br>
				<b><a href="https://www.nature.com/" target="_blank">Nature</a></b> 569, 698–702 (2019),
				<font color="firebrick"><b>5-year Impact Factor: 54.637</b></font>
				<br>
				<a href="http://stag.csail.mit.edu/" target="_blank"> <small>[Project]</small></a>
				<a href="https://www.nature.com/articles/s41586-019-1234-z" target="_blank"> <small>[Paper]</small></a>
				<a href="https://github.com/Erkil1452/touch" target="_blank"> <small>[Code]</small></a>
				<a href="http://stag.csail.mit.edu/files/sundaram2019stag.bib" target="_blank"> <small>[BibTex]</small></a>,

				<small>Collected by</small>
				<a href="projects/stag/stag_mit_museum.jpg" target="_blank"> <small>MIT Museum</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/sensor-glove-human-grasp-robotics-0529" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.nature.com/articles/d41586-019-01593-w" target="_blank"> <small>[Nature News & Views]</small></a>
				<a href="https://devicematerialscommunity.nature.com/users/257334-subramanian-sundaram/posts/49420-learning-dexterity-from-humans" target="_blank"> <small>[Nature communities]</small></a>
				<a href="https://www.economist.com/science-and-technology/2019/05/30/improving-robots-grasp-requires-a-new-way-to-measure-it-in-humans" target="_blank"> <small>[The Economist]</small></a>
				<a href="https://www.pbs.org/wgbh/nova/article/electronic-glove-pressure-sensors/" target="_blank"> <small>[PBS NOVA]</small></a>
				<a href="https://www.bbc.co.uk/sounds/play/p079yr9y" target="_blank"> <small>[BBC Radio]</small></a>
				<a href="https://www.newscientist.com/article/2204736-smart-glove-works-out-what-youre-holding-from-its-weight-and-shape/" target="_blank"> <small>[NewScientist]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/visgel/visgel.jpg" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://people.csail.mit.edu/junyanz/" target="_blank">Jun-Yan Zhu</a>,
				<a href="https://groups.csail.mit.edu/locomotion/russt.html" target="_blank">Russ Tedrake</a>, and
				<a href="http://web.mit.edu/torralba/www/" target="_blank">Antonio Torralba</a>
				<br>
				<b><font color="black">Connecting Touch and Vision via Cross-Modal Prediction</font></b><br>
				<b><a href="http://cvpr2019.thecvf.com/" target="_blank">CVPR 2019</a></b>,
				<a href="http://visgel.csail.mit.edu" target="_blank"> <small>[Project]</small></a>
				<a href="http://visgel.csail.mit.edu/visgel-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/VisGel" target="_blank"><small>[Code]</small></a>
				<a href="http://visgel.csail.mit.edu/visgel.bib" target="_blank"> <small>[BibTex]</small></a><br>

				<small>Covered by</small>
				<a href="http://news.mit.edu/2019/teaching-ai-to-connect-senses-vision-touch-0617" target="_blank"> <small>[MIT News]</small></a>
				<a href="https://www.bbc.com/news/av/technology-48711479/robot-taught-to-feel-objects-by-sight-and-other-news" target="_blank"> <small>[BBC]</small></a>
				<a href="https://www.cnn.com/2019/06/17/us/mit-robot-vision-touch-trnd/index.html" target="_blank"> <small>[CNN]</small></a>
				<a href="https://www.forbes.com/sites/charlestowersclark/2019/06/17/one-step-closer-to-human-intelligence-mit-csail-combine-sight-and-touch-in-ai/#3496256578b6" target="_blank"> <small>[Forbes]</small></a>
				<a href="https://techcrunch.com/2019/06/17/mit-develops-a-system-to-give-robots-more-human-senses/" target="_blank"> <small>[TechCrunch]</small></a>
				<a href="https://www.fastcompany.com/90365007/a-new-robot-can-now-identify-objects-by-touch" target="_blank"> <small>[Fast Company]</small></a>
				<a href="https://www.engadget.com/2019/06/17/robot-identify-sight-touch/" target="_blank"> <small>[Engadget]</small></a>
				</div>
			</div><hr>


			<br>
			<div id="imi" style="padding-top: 80px; margin-top: -80px;">
				<h5>Imitation Learning</h5>
			</div><br>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/infogail/infogail.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>,
				<a href="http://tsong.me/" target="_blank">Jiaming Song</a>, and
				<a href="http://cs.stanford.edu/~ermon/" target="_blank">Stefano Ermon</a>
				<br>
				<b><font color="black">InfoGAIL: Interpretable Imitation Learning from Visual Demonstrations</font></b><br>
				<b><a href="https://nips.cc/Conferences/2017" target="_blank">NIPS 2017</a></b>,
				<a href="projects/infogail/infogail-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/YunzhuLi/InfoGAIL" target="_blank"> <small>[Code]</small></a>
				<a href="projects/infogail/infogail.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/infogail/infogail-poster.pdf" target="_blank"><small>[Poster]</small></a>
				<a href="https://www.youtube.com/watch?v=YtNPBAW6h5k" target="_blank"> <small>[Video]</small></a>
				</div>
			</div><hr>


			<br>
			<div id="det" style="padding-top: 80px; margin-top: -80px;">
				<h5>Detection & Segmentation</h5>
			</div><br>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/skin/detection_tracking.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
				<a href="http://cs.stanford.edu/people/esteva/home/index.html" target="_blank">Andre Esteva</a>*,
				<a href="https://stanford.edu/~kuprel/" target="_blank">Brett Kuprel</a>,
				<a href="https://profiles.stanford.edu/roberto-novoa" target="_blank">Rob Novoa</a>,
				<a href="https://profiles.stanford.edu/justin-ko" target="_blank">Justin Ko</a>, and
				<a href="http://robots.stanford.edu/" target="_blank">Sebastian Thrun</a>
				<br>
				<b><font color="black">Skin Cancer Detection and Tracking using Data Synthesis and Deep Learning</font></b><br>
				<a href="https://nips.cc/Conferences/2016" target="_blank"><b>NIPS 2016</b> Workshop on Machine Learning for Health</a><br>
				<a href="http://w3phiai2017.w3phi.com/" target="_blank"><b>AAAI 2017</b> Joint Workshop on Health Intelligence</a><br>
				<a href="projects/skin/detection_tracking-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="projects/skin/skin.bib" target="_blank"> <small>[BibTex]</small></a>
				</div>
			</div><hr>

			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-rounded" src="projects/conv3d/face_detection_conv3d.png" style="border:1px solid black" alt="">
				</div>
				<div class="col-md-9">
				<a href="https://yunzhuli.github.io/"><b>Yunzhu Li</b></a>*,
				Benyuan Sun*,
				<a href="http://www.stat.ucla.edu/~tfwu/" target="_blank">Tianfu Wu</a>, and
				<a href="http://www.idm.pku.edu.cn/staff/wangyizhou/" target="_blank">Yizhou Wang</a>
				<br>
				<b><font color="black">Face Detection with End-to-End Integration of a ConvNet and a 3D Model</font></b><br>
				<b><a href="http://www.eccv2016.org/" target="_blank">ECCV 2016</a></b>,
				<a href="projects/conv3d/face_detection_conv3d-paper.pdf" target="_blank"> <small>[PDF]</small></a>
				<a href="https://github.com/tfwu/FaceDetection-ConvNet-3D" target="_blank"> <small>[Code]</small></a>
				<a href="projects/conv3d/conv3d.bib" target="_blank"> <small>[BibTex]</small></a>
				<a href="projects/conv3d/face_detection_conv3d-poster.pdf" target="_blank"> <small>[Poster]</small></a>
				</div>
			</div><hr>

		</script>

	</div>



// <!--&lt;!&ndash;     Publication &ndash;&gt;-->
// <!--  <div class="container-fluid" style="width: 80%;">-->
// <!--    <h4 style="margin-top: 30px;" id="pubs">Selected Publications</h4>-->
//
// <!--    <small>-->
// <!--      (<a href id="select0" onclick="showPubs0; return false;" style>show selected</a> /-->
// <!--      <a href id="select1" onclick="showPubs(1); return false;" style>show by date</a>/-->
// <!--      <a href id="select2" onclick="showPubs(2); return false;" style>show by topic</a>)-->
// <!--    </small> <br>-->
//
// <!--    <small>-->
// <!--      Research topics:-->
// <!--      <a href="t0" onclick="showPubs(2)" style>p</a> /-->
// <!--      <a href="t1" onclick="showPubs(2)" style>e</a>/-->
// <!--      <a href="t2" onclick="showPubs(2)" style>w</a>-->
// <!--    </small>-->
//
//
// <!--    <script id="pubs_selected" language="text">-->
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/CHI2023.jpg" alt="NeurIPS22" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Project Mihr: Enabling Gestural Interactions on a Keyboard using a Graphene-based Fabric </strong></p>-->
// <!--          <div>-->
// <!--            <strong>Y. Luo</strong>; E. Barhudarian; T. Seyed-->
// <!--          <div>-->
// <!--            <i>CHI Late-Breaking Work </i> (2023).-->
// <!--  &lt;!&ndash;          <a href="https://action-sense.csail.mit.edu/">[Project Page]</a>&ndash;&gt;-->
// <!--            <a href="https://openreview.net/pdf?id=olvz0gAdGOX">[Paper]</a>-->
// <!--            <a href="./pdf/CHI2023.pdf">[Poster]</a></p>-->
// <!--  &lt;!&ndash;          <p style="font-size:15px">&ndash;&gt;-->
// <!--  &lt;!&ndash;             Covered by <a href="https://news.mit.edu/2022/soft-assistive-robotic-wearables-get-boost-rapid-design-tool-0503" target="_blank">[MIT news]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;            <a href="https://techcrunch.com/2022/05/02/mit-used-autonomous-knitting-to-create-these-soft-robotic-banana-fingers/" target="_blank">[TechCrunch]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;            <a href="https://mashable.com/video/mit-soft-assistive-robotic-wearable" target="_blank">[Mashable]</a>.&ndash;&gt;-->
// <!--  &lt;!&ndash;          </p>&ndash;&gt;-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
//
// <!--  &lt;!&ndash;    <div class="row" style="margin-top: 30px;">&ndash;&gt;-->
// <!--  &lt;!&ndash;      <div class="col-md-4">&ndash;&gt;-->
// <!--  &lt;!&ndash;        <img src="./image/ICR2023.jpg" alt="NeurIPS22" style="max-width: 100%; max-height: 250px;">&ndash;&gt;-->
// <!--  &lt;!&ndash;      </div>&ndash;&gt;-->
// <!--  &lt;!&ndash;      <div class="col-md-8">&ndash;&gt;-->
// <!--  &lt;!&ndash;        <p><strong>Enable Natural Tactile Interaction for Robot Dog based on Large-format Distributed Flexible Pressure Sensors </strong></p>&ndash;&gt;-->
// <!--  &lt;!&ndash;        <div>&ndash;&gt;-->
// <!--  &lt;!&ndash;          <strong>Y. Luo</strong>; E. Barhudarian; T. Seyed&ndash;&gt;-->
// <!--  &lt;!&ndash;        <div>&ndash;&gt;-->
// <!--  &lt;!&ndash;          <i>ICRA </i> (2023).&ndash;&gt;-->
// <!--  &lt;!&ndash;&lt;!&ndash;          <a href="https://action-sense.csail.mit.edu/">[Project Page]</a>&ndash;&gt;&ndash;&gt;-->
// <!--  &lt;!&ndash;          <a href="https://openreview.net/pdf?id=olvz0gAdGOX">[Paper]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;          <a href="./pdf/CHI2023.pdf">[Poster]</a></p>&ndash;&gt;-->
// <!--  &lt;!&ndash;&lt;!&ndash;          <p style="font-size:15px">&ndash;&gt;&ndash;&gt;-->
// <!--  &lt;!&ndash;&lt;!&ndash;             Covered by <a href="https://news.mit.edu/2022/soft-assistive-robotic-wearables-get-boost-rapid-design-tool-0503" target="_blank">[MIT news]</a>&ndash;&gt;&ndash;&gt;-->
// <!--  &lt;!&ndash;&lt;!&ndash;            <a href="https://techcrunch.com/2022/05/02/mit-used-autonomous-knitting-to-create-these-soft-robotic-banana-fingers/" target="_blank">[TechCrunch]</a>&ndash;&gt;&ndash;&gt;-->
// <!--  &lt;!&ndash;&lt;!&ndash;            <a href="https://mashable.com/video/mit-soft-assistive-robotic-wearable" target="_blank">[Mashable]</a>.&ndash;&gt;&ndash;&gt;-->
// <!--  &lt;!&ndash;&lt;!&ndash;          </p>&ndash;&gt;&ndash;&gt;-->
// <!--  &lt;!&ndash;        </div>&ndash;&gt;-->
// <!--  &lt;!&ndash;      </div>&ndash;&gt;-->
// <!--  &lt;!&ndash;    </div>&ndash;&gt;-->
//
//
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/NeurIPS22.png" alt="NeurIPS22" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>ActionSense: A Multimodal Dataset and Recording Framework for Human Activities Using Wearable Sensors in a Kitchen Environment </strong></p>-->
// <!--          <div>-->
// <!--            J. DelPreto*; C. Liu*; <strong>Y. Luo</strong>; M. Foshey; Y. Li; A. Torralba; W. Matusik; D. Rus-->
// <!--          <div>-->
// <!--            <i>NeurIPS</i> (2022).-->
// <!--            <a href="https://action-sense.csail.mit.edu/">[Project Page]</a>-->
// <!--            <a href="https://openreview.net/pdf?id=olvz0gAdGOX">[Paper]</a></p>-->
// <!--  &lt;!&ndash;          <p style="font-size:15px">&ndash;&gt;-->
// <!--  &lt;!&ndash;             Covered by <a href="https://news.mit.edu/2022/soft-assistive-robotic-wearables-get-boost-rapid-design-tool-0503" target="_blank">[MIT news]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;            <a href="https://techcrunch.com/2022/05/02/mit-used-autonomous-knitting-to-create-these-soft-robotic-banana-fingers/" target="_blank">[TechCrunch]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;            <a href="https://mashable.com/video/mit-soft-assistive-robotic-wearable" target="_blank">[Mashable]</a>.&ndash;&gt;-->
// <!--  &lt;!&ndash;          </p>&ndash;&gt;-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/VR2023.jpg" alt="NC2022" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Seamless-walk: natural and comfortable virtual reality locomotion method with a high-resolution tactile sensor</strong></p>-->
// <!--          <div>-->
// <!--            Y. Choi; D. Park; S. Lee; I. Han; E. Akan; H. Jeon; <strong>Y. Luo</strong>; S. Kim; W. Matusik; D. Rus; K. Kim-->
// <!--          <div>-->
// <!--            <i>Virtual Reality</i>, 1-15 (2023).-->
// <!--  &lt;!&ndash;          <a href="http://pneuact.csail.mit.edu/">[Project Page]</a>&ndash;&gt;-->
// <!--            <a href="https://link.springer.com/article/10.1007/s10055-023-00750-x">[Paper]</a></p>-->
// <!--            <p style="font-size:15px">-->
// <!--               Covered by <a href="https://techxplore.com/news/2023-04-natural-comfortable-seamless-walk-virtual-reality.html" target="_blank">[TechXplore]</a>-->
// <!--              <a href="https://mixed-news.com/en/seamless-walk-vr-locomotion-system/" target="_blank">[MIXED Reality News]</a>-->
// <!--  &lt;!&ndash;            <a href="https://mashable.com/video/mit-soft-assistive-robotic-wearable" target="_blank">[Mashable]</a>.&ndash;&gt;-->
// <!--            </p>-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
//
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/NC2022.png" alt="NC2022" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Integrated biosensor platform based on graphene transistor arrays for real-time high-accuracy ion sensing</strong></p>-->
// <!--          <div>-->
// <!--            M.Xue; C. Mackin; W. Weng; J. Zhu; <strong>Y. Luo</strong>; S. Luo; A. Lu; M. Hempel; E. McVay; J. Kong; T. Palacios-->
// <!--          <div>-->
// <!--            <i>Nature Communications</i>, 13, 5064 (2022).-->
// <!--  &lt;!&ndash;          <a href="http://pneuact.csail.mit.edu/">[Project Page]</a>&ndash;&gt;-->
// <!--            <a href="https://www.nature.com/articles/s41467-022-32749-4">[Paper]</a></p>-->
// <!--  &lt;!&ndash;          <p style="font-size:15px">&ndash;&gt;-->
// <!--  &lt;!&ndash;             Covered by <a href="https://news.mit.edu/2022/soft-assistive-robotic-wearables-get-boost-rapid-design-tool-0503" target="_blank">[MIT news]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;            <a href="https://techcrunch.com/2022/05/02/mit-used-autonomous-knitting-to-create-these-soft-robotic-banana-fingers/" target="_blank">[TechCrunch]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;            <a href="https://mashable.com/video/mit-soft-assistive-robotic-wearable" target="_blank">[Mashable]</a>.&ndash;&gt;-->
// <!--  &lt;!&ndash;          </p>&ndash;&gt;-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/CHI2022_2.JPG" alt="CHI2022" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Digital Fabrication of Pneumatic Actuators with Integrated Sensing by Machine Knitting</strong></p>-->
// <!--          <div>-->
// <!--            <strong>Y. Luo</strong>; K. Wu; A. Spielberg; M. Foshey;  T. Palacios; D. Rus; W. Matusik-->
// <!--          <div>-->
// <!--            <p><i>ACM CHI</i> (2022).-->
// <!--            <a href="http://pneuact.csail.mit.edu/">[Project Page]</a>-->
// <!--            <a href="http://pneuact.csail.mit.edu/file/CHI2022.pdf">[Paper]</a></p>-->
// <!--            <p style="font-size:15px">-->
// <!--               Covered by <a href="https://news.mit.edu/2022/soft-assistive-robotic-wearables-get-boost-rapid-design-tool-0503" target="_blank">[MIT news]</a>-->
// <!--              <a href="https://techcrunch.com/2022/05/02/mit-used-autonomous-knitting-to-create-these-soft-robotic-banana-fingers/" target="_blank">[TechCrunch]</a>-->
// <!--              <a href="https://mashable.com/video/mit-soft-assistive-robotic-wearable" target="_blank">[Mashable]</a>.-->
// <!--            </p>-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/ICRA2022.JPG" alt="ICRA2022" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>An Integrated Design Pipeline for Tactile Sensing Robotic Manipulators</strong></p>-->
// <!--          <div>-->
// <!--            L. Zlokapa; <strong>Y. Luo</strong>; J. Xu; M. Foshey; K. Wu; P. Agrawal; W. Matusik-->
// <!--          <div>-->
// <!--            <p><i>ICRA</i> (2022).-->
// <!--            <a href="http://robohands.csail.mit.edu/">[Project Page]</a>-->
// <!--            <a href="https://arxiv.org/pdf/2204.07149.pdf">[Paper]</a></p>-->
// <!--            <p style="font-size:15px">-->
// <!--               Covered by <a href="https://news.mit.edu/2022/hand-robotic-manipulator-design-0525" target="_blank">[MIT news]</a>.-->
// <!--  &lt;!&ndash;            <a href="https://techcrunch.com/2022/05/02/mit-used-autonomous-knitting-to-create-these-soft-robotic-banana-fingers/" target="_blank">[TechCrunch]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;            <a href="https://mashable.com/video/mit-soft-assistive-robotic-wearable" target="_blank">[Mashable]</a>.&ndash;&gt;-->
// <!--            </p>-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/IROS2021.JPG" alt="IROS2021" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Dynamic Modeling of Hand-Object Interactions via Tactile Sensing</strong></p>-->
// <!--          <div>-->
// <!--            Q. Zhang*; Y. Li*; <strong>Y. Luo</strong>; W. Shou; M. Foshey; J. Yan; J. B. Tenenbaum; W. Matusik; A. Torralba-->
// <!--          <div>-->
// <!--            <i>IROS</i> (2021).-->
// <!--            <a href="http://phystouch.csail.mit.edu/">[Project Page]</a>-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/SIGGRAPH2021.jpg" alt="SIGGRAPH2021" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Knit Sketching: from Cut & Sew Patterns to Machine-Knit Garments</strong></p>-->
// <!--          <div>-->
// <!--            A. Kaspar; K. Wu; <strong>Y. Luo</strong>; L. Makatura; W. Matusik.-->
// <!--          </div>-->
// <!--          <div>-->
// <!--            <i>SIGGRAPH</i> (2021).-->
// <!--            <a href="http://knitsketching.csail.mit.edu/">[Project Page]</a>-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/CVPR2021.PNG" alt="CVPR2021" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Intelligent Carpet: Inferring 3D Human Pose from Tactile Signals</strong></p>-->
// <!--            <p><strong>Y. Luo</strong>; Y. Li; M. Foshey; W. Shou; P. Sharma; T. Palacios; A. Torralba; W. Matusik.  <br>-->
// <!--            <i>CVPR</i> (2021).-->
// <!--            <a href="http://intcarpet.csail.mit.edu/">[Project Page]</a>-->
// <!--            <a href="./pdf/CVPR2021.pdf" target="_blank">[Paper]</a>-->
// <!--            <a href="https://github.com/yiyueluo/IntelligentCarpet" target="_blank">[Code]</a></p>-->
// <!--            <p style="font-size:15px">-->
// <!--               Covered by <a href="https://news.mit.edu/2021/intelligent-carpet-gives-insight-human-poses-0624" target="_blank">[MIT news]</a>-->
// <!--              <a href="https://www.fastcompany.com/90648670/this-magic-carpet-can-track-your-workout" target="_blank">[Fast Company]</a>-->
// <!--              <a href="https://www.zdnet.com/article/mit-makes-an-ai-smart-carpet-for-monitoring-people-without-cameras/" target="_blank">[ZDNet]</a>.-->
// <!--            </p>-->
// <!--        </div>-->
// <!--      </div>-->
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4", style="text-align: center">-->
// <!--          <img src="./image/NE2021_3.png" alt="NE2021" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Learning human-environment interactions using conformal tactile textiles</strong></p>-->
// <!--          <div>-->
// <!--            <p><strong>Y. Luo</strong>; Y. Li; P. Sharma; W. Shou; K. Wu; M. Foshey; B. Li; T. Palacios; A. Torralba; W. Matusik.  <br>-->
// <!--            <i>Nature Electronics</i>, 4, 193–201(2021)-->
// <!--  &lt;!&ndash;        <a href="./file/NE2021.pdf" target="_blank">[Paper (PDF)]</a>&ndash;&gt;-->
// <!--            <a href="http://senstextile.csail.mit.edu/" target="_blank">[Project page]</a>-->
// <!--            <a href="https://www.nature.com/articles/s41928-021-00558-0" target="_blank">[Paper (External link)]</a>-->
// <!--            <a href="https://www.dropbox.com/sh/g70n60jfutzd0l5/AACnOgtLUG8tHbU8TLn5MBFba?dl=0" target="_blank">[Dataset]</a>-->
// <!--            <a href="https://github.com/YunzhuLi/senstextile" target="_blank">[Code]</a> </p>-->
// <!--            <p style="font-size:15px">-->
// <!--              Selected as <a href="https://www.nature.com/natelectron/volumes/4/issues/3" target="_blank">cover</a>. Commentary-->
// <!--              in <i>Nature Electronics</i> <a href="https://www.nature.com/articles/s41928-021-00560-6" target="_blank">(link)</a>.-->
// <!--              Covered by <a href="https://www.csail.mit.edu/news/smart-clothes-can-measure-your-movements" target="_blank">[MIT news]</a>-->
// <!--              <a href="https://www.engadget.com/mit-csail-smart-clothes-track-movements-160010512.html" target="_blank">[Engadget]</a>.-->
// <!--            </p>-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4">-->
// <!--          <img src="./image/CHI2021.JPG" alt="CHI2021" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>KnitUI: Fabricating Interactive and Sensing Textiles with Machine Knitting</strong></p>-->
// <!--          <div>-->
// <!--            <p><strong>Y. Luo</strong>*; K. Wu*; T. Palacios; W. Matusik.  <br>-->
// <!--            <i>ACM CHI</i> (2021).-->
// <!--            <a href="http://knitui.csail.mit.edu">[Project page]</a>-->
// <!--              <a href="./pdf/CHI2021.pdf" target="_blank">[Paper]</a></p>-->
// <!--            <p style="font-size:15px">Best Paper Honorable Mention Award </p>-->
// <!--          </div>-->
//
// <!--        </div>-->
// <!--      </div>-->
//
// <!--  &lt;!&ndash;    <div class="row" style="margin-top: 30px;">&ndash;&gt;-->
// <!--  &lt;!&ndash;      <div class="col-md-4">&ndash;&gt;-->
// <!--  &lt;!&ndash;        <img src="./image/EM2017.PNG" alt="EM2017" style="max-width: 100%; max-height: 250px;">&ndash;&gt;-->
// <!--  &lt;!&ndash;      </div>&ndash;&gt;-->
// <!--  &lt;!&ndash;      <div class="col-md-8">&ndash;&gt;-->
// <!--  &lt;!&ndash;        <p><strong>Deterministic Assembly of 3D Mesostructures in Advanced Materials via Compressive Buckling: A short Review of&ndash;&gt;-->
// <!--  &lt;!&ndash;          Recent Progress</strong></p>&ndash;&gt;-->
// <!--  &lt;!&ndash;        <div>&ndash;&gt;-->
// <!--  &lt;!&ndash;          Z. Yan; M. Han; Y. Yang; K. Nan; H. Luan; <strong>Y. Luo</strong>; Y. Zhang; Y. Huang; J. A. Rogers.&ndash;&gt;-->
// <!--  &lt;!&ndash;        </div>&ndash;&gt;-->
// <!--  &lt;!&ndash;        <div>&ndash;&gt;-->
// <!--  &lt;!&ndash;          <i>Extreme Mechanics Letters</i> 11 (2017).&ndash;&gt;-->
// <!--  &lt;!&ndash;          <a href="https://www.sciencedirect.com/science/article/pii/S2352431616302218" target="_blank">[Paper]</a>&ndash;&gt;-->
// <!--  &lt;!&ndash;        </div>&ndash;&gt;-->
// <!--  &lt;!&ndash;      </div>&ndash;&gt;-->
// <!--  &lt;!&ndash;    </div>&ndash;&gt;-->
//
// <!--      <div class="row" style="margin-top: 30px;">-->
// <!--        <div class="col-md-4" style="text-align: center">-->
// <!--          <img src="./image/PNAS2017.PNG" alt="PNAS2017" style="max-width: 100%; max-height: 250px;">-->
// <!--        </div>-->
// <!--        <div class="col-md-8">-->
// <!--          <p><strong>Three-dimensional Mesostructures as High-temperature Growth Templates, Electronic Cellular Scaffolds, and-->
// <!--            Self-propelled Microrobots</strong></p>-->
// <!--          <div>-->
// <!--            Z. Yan; M. Han; Y. Shi; A. Badea; Y. Yang; A. Kulkarni; E. Hanson; M. E. Kandel; X. Wen; F. Zhang; <strong>Y.-->
// <!--              Luo</strong>; Q. Lin; et.al.-->
// <!--          </div>-->
// <!--          <div>-->
// <!--            <i>Proceedings of the National Academy of Sciences</i> 114.45 (2017).-->
// <!--            <a href="https://www.pnas.org/content/114/45/E9455" target="_blank">[Paper]</a>-->
// <!--          </div>-->
// <!--        </div>-->
// <!--      </div>-->
//
// <!--    </script>-->








    <!-- Experience -->
  <div class="container-fluid" style="width: 80%;">
    <h4 style="margin-top: 30px;" id="exp">Experience</h4>
    <div class="row" style="margin-top: 10px;">
      <div class="col-8">
        <div>Massachusetts Institute of Technology </div>
        <div><i>Research Assistant | Advisor: Prof. Wojciech Matusik & Prof. Tomas Palacios</i> </div>
      </div>
      <div class="col-4" style="text-align: right;">
        <div>Aug 2018 - present </div>
        <div>Cambridge, Massachusetts </div>
      </div>
    </div>

    <div class="row" style="margin-top: 10px;">
      <div class="col-8">
        <div>Microsoft Research
        </div>
        <div><i>Research Intern | Mentor: Dr. Teddy Seyed </i> </div>
      </div>
      <div class="col-4" style="text-align: right;">
        <div>May 2022 - Aug 2022 </div>
        <div>Redmond, Washington </div>
      </div>
    </div>

    <div class="row" style="margin-top: 10px;">
      <div class="col-8">
        <div>Chinese Academy of Science
        </div>
        <div><i>Research Assistant | Advisor: Dr. Xuetong Sun </i> </div>
      </div>
      <div class="col-4" style="text-align: right;">
        <div>Mar 2018 - Aug 2018 </div>
        <div>Guangzhou, China </div>
      </div>
    </div>

    <div class="row" style="margin-top: 10px;">
      <div class="col-8">
        <div>University of Illinois at Urbana Champaign </div>
        <div><i>Undergraduate Research Assistant | Advisor: Prof. John A. Roger & Dr. Zheng Yan </i> </div>
      </div>
      <div class="col-4" style="text-align: right;">
        <div>Jan 2016 - Dec 2017 </div>
        <div>Urbana, Illinois </div>
      </div>
    </div>

    <div class="row" style="margin-top: 10px;">
      <div class="col-8">
        <div>University of Illinois at Urbana Champaign </div>
        <div><i>UEngineering Learning Assistant </i> </div>
      </div>
      <div class="col-4" style="text-align: right;">
        <div>Jan 2016 - Dec 2017 </div>
        <div>Urbana, Illinois </div>
      </div>
    </div>

    <div style="height: 50px;"></div>

  </div>


	<script>showPubs(1);</script>
	<script>var scroll = new SmoothScroll('a[href*="#"]', {speed: 1000});</script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

</body>

</html>
