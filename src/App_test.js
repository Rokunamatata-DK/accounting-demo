import React, { useState } from 'react';
import './css/style.css';
import './img/*'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrialBalance from './components/TrialBalance';
import TCodeAssign from './components/TCodeAssign';
import TCodeManager from './components/TCodeManager';

function App_test() {
    const [tCodes, setTCodes] = useState([100, 110, 111, 200, 210, 300, 310, 400, 500]);
    const [assignedTCodes, setAssignedTCodes] = useState({});

    return (
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side">
                <div class="sidebar-brand fixed-brand">
                    <img class="logo-element-img img-logo" id="logo" src="img/LOGO_2.png" alt=""></img>
                        <a class="close-canvas-menu text-white float-right"><i class="fa fa-times"></i></a>
                </div>
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li class="nav-header">
                            <div class="logo-element fixed-brand">
                                <img class="mini-logo" src="img/LOGO_3.png" alt=""></img>
                            </div>
                            <div class="dropdown profile-element">
                                <div class="sidebar-header">
                                    <div class="sidebar-nav-search">
                                        <div class="input-group mb-3 input-group-sm input-group-border">
                                            <input type="text" class="form-control input-group-text" id="search-menu" placeholder="Search Menu ..."></input>
                                                <div class="input-group-append">
                                                    <button class="btn btn-secondary toggle-btn" type="submit"><i class="feather icon-x-circle"></i></button>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="profile-bg"><img src="img/profile_bg.JPG" alt=""></img></div>
                                    <div class="search-toggle toggle-btn"><i class="feather icon-chevron-up"></i></div>
                                    <div class="user-profile-info">
                                        <div class="user-pic">
                                            <img class="img-responsive img-rounded" alt="User picture" src="img/users/user3.jpg"></img>
                                        </div>
                                        <div class="user-info">
                                            <span class="user-name">John
                                                <strong>Smith</strong>
                                            </span>
                                            <span class="user-role">Administrator</span>
                                            <span class="user-status">
                                                <i class="fa fa-circle text-success"></i>
                                                <span>Online</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item category-titles"><a>Navigation</a></li>
                        <li class="nav-item active">
                            <a href="index.html" class="nav-link"><i class="fa feather icon-home"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li class="nav-item"><a href="index.html" class="nav-link"><i class="fa fa-circle-o"></i> Dashboard v.1</a></li>
                                <li class="nav-item"><a href="dashboard_v2.html" class="nav-link"><i class="fa fa-circle-o"></i> Dashboard v.2</a></li>
                                <li class="nav-item"><a href="dashboard_v3.html" class="nav-link"><i class="fa fa-circle-o"></i> Dashboard v.3</a></li>
                                <li class="nav-item"><a href="dashboard_v4.html" class="nav-link"><i class="fa fa-circle-o"></i> Dashboard v.4</a></li>
                                <li class="nav-item"><a href="dashboard_v5.html" class="nav-link"><i class="fa fa-circle-o"></i> Dashboard v.5</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=""><i class="fa feather icon-sidebar"></i> <span class="nav-label">Page Layouts</span> <span class="label label-danger">New</span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a href="left_sidebar.html" class="nav-link"><i class="fa fa-circle-o"></i> Left Side Navigation</a></li>
                                <li class="nav-item"><a href="rtl_layout.html" class="nav-link"><i class="fa fa-circle-o"></i> RTL Navigation</a></li>
                                <li class="nav-item"><a href="top_center_layout.html" class="nav-link"><i class="fa fa-circle-o"></i> Top Fluid Navbar</a></li>
                                <li class="nav-item"><a href="mini-sidebar.html" class="nav-link"><i class="fa fa-circle-o"></i> Mini Sidebar</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="navigation.html"><i class="fa feather icon-menu"></i> <span class="nav-label">Navigation</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="widget.html"><i class="fa feather icon-layers"></i> <span class="nav-label">Widget </span> <span class="label label-success">100 +</span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="statistic.html"><i class="fa fa-circle-o"></i> Statistic</a></li>
                                <li class="nav-item"><a class="nav-link" href="data.html"><i class="fa fa-circle-o"></i> Data</a></li>
                                <li class="nav-item"><a class="nav-link" href="chart_widget.html"><i class="fa fa-circle-o"></i> Chart Widget</a></li>
                            </ul>
                        </li>
                        <li class="nav-item category-titles"><a>UI Element</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="basic_components.html"><i class="fa feather icon-box"></i> <span class="nav-label">Basic Components</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="alert.html"><i class="fa fa-circle-o"></i>Alert</a></li>
                                <li class="nav-item"><a class="nav-link" href="breadcrumbs.html"><i class="fa fa-circle-o"></i> Breadcrumbs</a></li>
                                <li class="nav-item"><a class="nav-link" href="buttons.html"><i class="fa fa-circle-o"></i> Button</a></li>
                                <li class="nav-item"><a class="nav-link" href="box_shadow.html"><i class="fa fa-circle-o"></i>Box Shadow</a></li>
                                <li class="nav-item"><a class="nav-link" href="accordion.html"><i class="fa fa-circle-o"></i> Accordion</a></li>
                                <li class="nav-item"><a class="nav-link" href="generic_class.html"><i class="fa fa-circle-o"></i> Generic Class</a></li>
                                <li class="nav-item"><a class="nav-link" href="tabs.html"><i class="fa fa-circle-o"></i> Tabs</a></li>
                                <li class="nav-item"><a class="nav-link" href="color.html"><i class="fa fa-circle-o"></i> Color</a></li>
                                <li class="nav-item"><a class="nav-link" href="label_badge.html"><i class="fa fa-circle-o"></i> Label Badge</a></li>
                                <li class="nav-item"><a class="nav-link" href="progress_bar.html"><i class="fa fa-circle-o"></i> Progress Bar</a></li>
                                <li class="nav-item"><a class="nav-link" href="pre_loader.html"><i class="fa fa-circle-o"></i> Pre-Loader</a></li>
                                <li class="nav-item"><a class="nav-link" href="list.html"><i class="fa fa-circle-o"></i> List</a></li>
                                <li class="nav-item"><a class="nav-link" href="tooltip_popover.html"><i class="fa fa-circle-o"></i> Tooltip & Popover</a></li>
                                <li class="nav-item"><a class="nav-link" href="typography.html"><i class="fa fa-circle-o"></i> Typography</a></li>
                                <li class="nav-item"><a class="nav-link" href="other.html"><i class="fa fa-circle-o"></i> Other</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="basic_components.html"><i class="fa feather icon-gitlab"></i> <span class="nav-label">Advance Components</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="draggable.html"><i class="fa fa-circle-o"></i>Draggable</a></li>
                                <li class="nav-item"><a class="nav-link" href="grid_stack.html"><i class="fa fa-circle-o"></i> Grid Stack</a></li>
                                <li class="nav-item"><a class="nav-link" href="light_box.html"><i class="fa fa-circle-o"></i> Light Box</a></li>
                                <li class="nav-item"><a class="nav-link" href="modal.html"><i class="fa fa-circle-o"></i> Modal</a></li>
                                <li class="nav-item"><a class="nav-link" href="notifications.html"><i class="fa fa-circle-o"></i> Notifications</a></li>
                                <li class="nav-item"><a class="nav-link" href="pnotify.html"><i class="fa fa-circle-o"></i> PNotify</a></li>
                                <li class="nav-item"><a class="nav-link" href="rating.html"><i class="fa fa-circle-o"></i> Rating</a></li>
                                <li class="nav-item"><a class="nav-link" href="range_slider.html"><i class="fa fa-circle-o"></i> Range Slider</a></li>
                                <li class="nav-item"><a class="nav-link" href="slider.html"><i class="fa fa-circle-o"></i> Slider</a></li>
                                <li class="nav-item"><a class="nav-link" href="syntax_highlighter.html"><i class="fa fa-circle-o"></i> Syntax Highlighter</a></li>
                                <li class="nav-item"><a class="nav-link" href="tour.html"><i class="fa fa-circle-o"></i> Tour</a></li>
                                <li class="nav-item"><a class="nav-link" href="tree_view.html"><i class="fa fa-circle-o"></i> Tree View</a></li>
                                <li class="nav-item"><a class="nav-link" href="nestable.html"><i class="fa fa-circle-o"></i> Nestable</a></li>
                                <li class="nav-item"><a class="nav-link" href="toolbar.html"><i class="fa fa-circle-o"></i> Toolbar</a></li>
                                <li class="nav-item"><a class="nav-link" href="x-editable.html"><i class="fa fa-circle-o"></i> Editable</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="animations.html"><i class="fa feather icon-aperture rotate-icon"></i> <span class="nav-label">Animations</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pin_board.html"><i class="fa feather icon-file-text"></i> <span class="nav-label">Pin Board</span> <span class="label label-info">Hot</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-command"></i> <span class="nav-label">Icons</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="icons_font_awesome.html"><i class="fa fa-circle-o"></i> Font Awesome</a></li>
                                <li class="nav-item"><a class="nav-link" href="icons_themify.html"><i class="fa fa-circle-o"></i> Themify</a></li>
                                <li class="nav-item"><a class="nav-link" href="icons_simple_line_icon.html"><i class="fa fa-circle-o"></i> Simple Line Icon</a></li>
                                <li class="nav-item"><a class="nav-link" href="icons_ion_icon.html"><i class="fa fa-circle-o"></i> Ion Icon</a></li>
                                <li class="nav-item"><a class="nav-link" href="icons_material_design.html"><i class="fa fa-circle-o"></i> Material Design</a></li>
                                <li class="nav-item"><a class="nav-link" href="icons_weather_icon.html"><i class="fa fa-circle-o"></i> Weather Icon</a></li>
                                <li class="nav-item"><a class="nav-link" href="icons_typicons.html"><i class="fa fa-circle-o"></i> Typicons</a></li>
                                <li class="nav-item"><a class="nav-link" href="icons_flags_icon.html"><i class="fa fa-circle-o"></i> Flags Icons</a></li>
                            </ul>
                        </li>
                        <li class="nav-item category-titles"><a>Forms</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-clipboard"></i> <span class="nav-label">Form Components</span> <span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="form_components.html"><i class="fa fa-circle-o"></i> Form Components</a></li>
                                <li class="nav-item"><a class="nav-link" href="form_elements_add_on.html"><i class="fa fa-circle-o"></i> Components Add On</a></li>
                                <li class="nav-item"><a class="nav-link" href="form_elements_advance.html"><i class="fa fa-circle-o"></i> Advance Components</a></li>
                                <li class="nav-item"><a class="nav-link" href="form_validation.html"><i class="fa fa-circle-o"></i> Form Validation</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="form_picker.html"><i class="fa feather icon-edit-1"></i> <span class="nav-label">Form Picker</span> <span class="label label-warning">New</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="form_select.html"><i class="fa feather icon-feather"></i> <span class="nav-label">Form Select</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="form_masking.html"><i class="fa feather icon-shield"></i> <span class="nav-label">Form Masking</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="form_wizard.html"><i class="fa feather icon-tv"></i> <span class="nav-label">Form Wizard</span></a>
                        </li>
                        <li class="nav-item category-titles"><a>Tables</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-twitter"></i> <span class="nav-label">Bootstrap Table</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="table_basic_table.html"><i class="fa fa-circle-o"></i> Basic Table</a></li>
                                <li class="nav-item"><a class="nav-link" href="table_sizing_table.html"><i class="fa fa-circle-o"></i> Sizing Table</a></li>
                                <li class="nav-item"><a class="nav-link" href="table_border_table.html"><i class="fa fa-circle-o"></i> Border Table</a></li>
                                <li class="nav-item"><a class="nav-link" href="table_styling_table.html"><i class="fa fa-circle-o"></i> Styling Table</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-inbox"></i> <span class="nav-label">DataTable</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="datatable_basic_initialization.html"><i class="fa fa-circle-o"></i> Basic Initialization</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_advance_initialization.html"><i class="fa fa-circle-o"></i> Advance Initialization</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_styling.html"><i class="fa fa-circle-o"></i> DataTable Styling</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_plugin.html"><i class="fa fa-circle-o"></i> DataTable Plugin</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-server"></i> <span class="nav-label">DataTable Extensions</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="datatable_auto_fill.html"><i class="fa fa-circle-o"></i> Auto Fill</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_button.html"><i class="fa fa-circle-o"></i> Button</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_column_reorder.html"><i class="fa fa-circle-o"></i> Column Reorder</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_fixed_columns.html"><i class="fa fa-circle-o"></i> Fixed Columns</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_fixed_header.html"><i class="fa fa-circle-o"></i> Fixed Header</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_key_table.html"><i class="fa fa-circle-o"></i> Key Table</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_responsive.html"><i class="fa fa-circle-o"></i> Responsive</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_row_reorder.html"><i class="fa fa-circle-o"></i> Row Reorder</a></li>
                                <li class="nav-item"><a class="nav-link" href="datatable_select_table.html"><i class="fa fa-circle-o"></i> Select Table</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="foo-table.html"><i class="fa feather icon-grid"></i> <span class="nav-label">FooTable</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="editable_table.html"><i class="fa feather icon-edit"></i> <span class="nav-label">EdiTable Table</span></a>
                        </li>
                        <li class="nav-item category-titles"><a>Chart And Maps</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-pie-chart"></i> <span class="nav-label">Charts</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="charts_google_chart.html"><i class="fa fa-circle-o"></i> Google Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_echarts_chart.html"><i class="fa fa-circle-o"></i> Echarts</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_chartjs_chart.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_list_chart.html"><i class="fa fa-circle-o"></i> List Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_flot_chart.html"><i class="fa fa-circle-o"></i> Flot Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_knob_chart.html"><i class="fa fa-circle-o"></i> Knob Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_morris_chart.html"><i class="fa fa-circle-o"></i> Morris Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_nvd3_chart.html"><i class="fa fa-circle-o"></i> Nvd3 Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_peity_chart.html"><i class="fa fa-circle-o"></i> Peity Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_radial_chart.html"><i class="fa fa-circle-o"></i> Radial Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_rickshaw_chart.html"><i class="fa fa-circle-o"></i> Rickshaw Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_sparkline_chart.html"><i class="fa fa-circle-o"></i> Sparkline Chart</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts_c3_chart.html"><i class="fa fa-circle-o"></i> C3 Chart</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="editable_table.html"><i class="fa feather icon-map"></i> <span class="nav-label">Maps</span> <span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-circle-o"></i> Vector Map</a></li>
                            </ul>
                        </li>
                        <li class="nav-item category-titles"><a>Pages</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-unlock"></i> <span class="nav-label">Authentication</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="auth_bg_image_signin.html"><i class="fa fa-circle-o"></i> Login One</a></li>
                                <li class="nav-item"><a class="nav-link" href="auth_social_icons_signin.html"><i class="fa fa-circle-o"></i> Login Two</a></li>
                                <li class="nav-item"><a class="nav-link" href="auth_bg_image_registration.html"><i class="fa fa-circle-o"></i> Registration One</a></li>
                                <li class="nav-item"><a class="nav-link" href="auth_social_icons_registration.html"><i class="fa fa-circle-o"></i> Registration Two</a></li>
                                <li class="nav-item"><a class="nav-link" href="auth_multi_step_registration.html"><i class="fa fa-circle-o"></i> Multi Step Registration</a></li>
                                <li class="nav-item"><a class="nav-link" href="auth_forgot_password.html"><i class="fa fa-circle-o"></i> Forgot Password</a></li>
                                <li class="nav-item"><a class="nav-link" href="auth_lock_screen.html"><i class="fa fa-circle-o"></i> Lock Screen</a></li>
                                <li class="nav-item"><a class="nav-link" href="auth_login_modal.html"><i class="fa fa-circle-o"></i> Login With Modal</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-sliders"></i> <span class="nav-label">Maintenance</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="mainten_error.html"><i class="fa fa-circle-o"></i> Error</a></li>
                                <li class="nav-item"><a class="nav-link" href="mainten_comming_soon.html"><i class="fa fa-circle-o"></i> Comming Soon</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-users"></i> <span class="nav-label">User Profile</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="user_timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>
                                <li class="nav-item"><a class="nav-link" href="user_timeline_social.html"><i class="fa fa-circle-o"></i> Timeline Social</a></li>
                                <li class="nav-item"><a class="nav-link" href="user_profile.html"><i class="fa fa-circle-o"></i> User Profile</a></li>
                                <li class="nav-item"><a class="nav-link" href="user_card.html"><i class="fa fa-circle-o"></i> User Card</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-shopping-cart"></i> <span class="nav-label">E-Commerce</span> <span class="label label-success">New</span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="ecommerce_product.html"><i class="fa fa-circle-o"></i> Product</a></li>
                                <li class="nav-item"><a class="nav-link" href="ecommerce_product_list.html"><i class="fa fa-circle-o"></i> Product list</a></li>
                                <li class="nav-item"><a class="nav-link" href="ecommerce_product_edit.html"><i class="fa fa-circle-o"></i> Product Edit</a></li>
                                <li class="nav-item"><a class="nav-link" href="ecommerce_product_detail.html"><i class="fa fa-circle-o"></i> Product Detail</a></li>
                                <li class="nav-item"><a class="nav-link" href="ecommerce_product_card.html"><i class="fa fa-circle-o"></i> Product Card</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-mail"></i> <span class="nav-label">Email</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="email_compose.html"><i class="fa fa-circle-o"></i> Compose Email</a></li>
                                <li class="nav-item"><a class="nav-link" href="email_inbox.html"><i class="fa fa-circle-o"></i> Inbox</a></li>
                                <li class="nav-item"><a class="nav-link" href="email_read.html"><i class="fa fa-circle-o"></i> Read Email</a></li>
                                <li class="nav-item"><a class="nav-link" href="email_template.html"><i class="fa fa-circle-o"></i> Email Template</a></li>
                            </ul>
                        </li>
                        <li class="nav-item category-titles"><a>App</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="chat.html"><i class="fa feather icon-message-square"></i> <span class="nav-label">Chat</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-globe"></i> <span class="nav-label">Social</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="social_wall.html"><i class="fa fa-circle-o"></i> Wall</a></li>
                                <li class="nav-item"><a class="nav-link" href="social_messages.html"><i class="fa fa-circle-o"></i> Messages</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-check-circle"></i> <span class="nav-label">Task</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="task_list.html"><i class="fa fa-circle-o"></i> Task List</a></li>
                                <li class="nav-item"><a class="nav-link" href="task_board.html"><i class="fa fa-circle-o"></i> Task Board</a></li>
                                <li class="nav-item"><a class="nav-link" href="task_detail.html"><i class="fa fa-circle-o"></i> Task Detail</a></li>
                                <li class="nav-item"><a class="nav-link" href="task_issue_list.html"><i class="fa fa-circle-o"></i> Issue List</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-bookmark"></i> <span class="nav-label">To-Do</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="todo.html"><i class="fa fa-circle-o"></i> Todo</a></li>
                                <li class="nav-item"><a class="nav-link" href="todo_notes.html"><i class="fa fa-circle-o"></i> Notes</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-image"></i> <span class="nav-label">Gallery</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="gallery_grid.html"><i class="fa fa-circle-o"></i> Gallery Grid</a></li>
                                <li class="nav-item"><a class="nav-link" href="gallery_masonry.html"><i class="fa fa-circle-o"></i> Masonry Gallery</a></li>
                                <li class="nav-item"><a class="nav-link" href="gallery_advance.html"><i class="fa fa-circle-o"></i> Advance Gallery</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-search"></i> <span class="nav-label">Search</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="search_simple.html"><i class="fa fa-circle-o"></i> Simple Search</a></li>
                                <li class="nav-item"><a class="nav-link" href="search_grouping.html"><i class="fa fa-circle-o"></i> Grouping Search</a></li>
                            </ul>
                        </li>
                        <li class="nav-item category-titles"><a>Extension</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-file-plus"></i> <span class="nav-label">Editor</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="editor_ckeditor.html"><i class="fa fa-circle-o"></i> CK-Editor</a></li>
                                <li class="nav-item"><a class="nav-link" href="editor_wysiwyg.html"><i class="fa fa-circle-o"></i> WYSIWYG Editor</a></li>
                                <li class="nav-item"><a class="nav-link" href="editor_ace_editor.html"><i class="fa fa-circle-o"></i> Ace Editor</a></li>
                                <li class="nav-item"><a class="nav-link" href="editor_long_press.html"><i class="fa fa-circle-o"></i> Long Press Editor</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-file-minus"></i> <span class="nav-label">Invoice</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item"><a class="nav-link" href="invoice.html"><i class="fa fa-circle-o"></i> Invoice</a></li>
                                <li class="nav-item"><a class="nav-link" href="invoice_summary.html"><i class="fa fa-circle-o"></i> Invoice Summary</a></li>
                                <li class="nav-item"><a class="nav-link" href="invoice_list.html"><i class="fa fa-circle-o"></i> Invoice List</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="full_calendar.html"><i class="fa feather icon-calendar"></i> <span class="nav-label">Full Calendar</span> <span class="label label-warning">Hot</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="image_cropper.html"><i class="fa feather icon-scissors"></i> <span class="nav-label">Image Cropper</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="file_upload.html"><i class="fa feather icon-upload-cloud"></i> <span class="nav-label">File Upload</span></a>
                        </li>
                        <li class="nav-item category-titles"><a>Other</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa feather icon-list"></i> <span class="nav-label">Menu Levels </span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="damian"><i class="fa fa-circle-o"></i> Third Level <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o"></i> Third Level Item</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o"></i> Third Level Item</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o"></i> Third Level Item</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o"></i> Second Level Item</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o"></i> Second Level Item</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o"></i> Second Level Item</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item disabled" href="#"><i class="fa feather icon-power"></i> <span class="nav-label">Disabled Menu</span></a>
                        </li>
                        <li class="nav-item category-titles"><a>Support</a></li>
                        <li class="nav-item landing_link">
                            <a class="nav-link" href=""><i class="fa feather icon-navigation-2"></i> <span class="nav-label">Landing Page</span> <span class="label label-danger">NEW</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=""><i class="fa feather icon-monitor"></i> <span class="nav-label">Documentation</span></a>
                        </li>
                    </ul>
                    <div class="sidebar-footer hidden-small">
                        <a class="setting-btn" data-toggle="tooltip" data-placement="top" title="Open Settings Menu" data-original-title="Settings">
                            <span class="feather icon-settings" aria-hidden="true"></span>
                        </a>
                        <a onclick="toggleFullScreen();" class="toggle-full-screen" data-toggle="tooltip" data-placement="top" title="Go FullScreen" data-original-title="FullScreen">
                            <span id="full-screen" class="feather icon-maximize full-screen" aria-hidden="true"></span>
                        </a>
                        <a id="disable-click" data-toggle="tooltip" data-placement="top" title="Lock Sidebar" data-original-title="Lock">
                            <span class="feather icon-eye" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Logout From Site" href="" data-original-title="Logout">
                            <span class="feather icon-power" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </nav>
             <div id="page-wrapper" class="gray-bg topMargin">
                <div class="row border-bottom">
                    <nav class="navbar navbar-static-top navbar-fixed-top topNav-white-theme" id="topNavbar">
                        <div class="navbar-header left">
                            <a class="nav-link navbar-mini mini-style" href="#"><i class="feather icon-menu icon-toggle-left"></i></a>
                            <div class="searchbar">
                                <input class="search_input" type="text" placeholder="Search..."></input>
                                    <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                            </div>
                        </div>
                        <ul class="nav navbar-top-links navbar-right ml-auto">
                            <li class="nav-item">
                                <a class="nav-link btn-full-screen toggle-full-screen" onclick="toggleFullScreen();" data-toggle="tooltip" data-placement="top" title="Go FullScreen" data-original-title="FullScreen"><span id="top-full-screen" class="feather icon-maximize full-screen" aria-hidden="true"></span></a>
                            </li>
                            <li class="nav-item dropdown message-dropdown">
                                <a class="nav-link dropdown-toggle count-msg show-notification" data-toggle="dropdown" href="#">
                                    <i class="fa fa-envelope-o"></i> <span class="label label-success">146</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right notifications bounce animated  ml-auto">
                                    <li class="notification-heading">
                                        <h6 class="menu-title">Messages</h6>
                                    </li>
                                    <li>
                                        <ul class="dropdown-messages">
                                            <li class="nav-item">
                                                <div class="dropdown-messages-box">
                                                    <a href="profile.html" class="float-left pt-1">
                                                        <img alt="image" class="img-circle" src="img/2.jpg"></img>
                                                    </a>
                                                    <div class="media-body">
                                                        <small class="float-right">46h ago</small>
                                                        <strong>John Loreipsum</strong> started following <strong>Anna Smith</strong>. <br></br>
                                                            <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="nav-item">
                                                <div class="dropdown-messages-box">
                                                    <a href="profile.html" class="float-left pt-1">
                                                        <img alt="image" class="img-circle" src="img/9.jpg"></img>
                                                    </a>
                                                    <div class="media-body ">
                                                        <small class="float-right text-navy">5h ago</small>
                                                        <strong>Chris jackson</strong> started following <strong>Anna Smith</strong>. <br></br>
                                                            <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="nav-item">
                                                <div class="dropdown-messages-box">
                                                    <a href="profile.html" class="float-left pt-1">
                                                        <img alt="image" class="img-circle" src="img/2.jpg"></img>
                                                    </a>
                                                    <div class="media-body ">
                                                        <small class="float-right">23h ago</small>
                                                        <strong>Monica Smith</strong> love <strong>Carlos Smith</strong>. <br></br>
                                                            <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="nav-item">
                                                <div class="dropdown-messages-box">
                                                    <a href="profile.html" class="float-left pt-1">
                                                        <img alt="image" class="img-circle" src="img/9.jpg"></img>
                                                    </a>
                                                    <div class="media-body ">
                                                        <small class="float-right text-navy">5h ago</small>
                                                        <strong>Chris jackson</strong> started following <strong>Anna Smith</strong>. <br></br>
                                                            <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="notification-footer">
                                        <h6 class="menu-title">View all<i class="glyphicon glyphicon-circle-arrow-right"></i></h6>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle count-msg show-chat-list" data-toggle="dropdown" href="#">
                                    <i class="fa fa-bell-o"></i>
                                    <span class="label label-danger">12</span>
                                </a>
                            </li>
                            <li class="nav-item user-profile header-notification">
                                <div class="nav-link dropdown-primary dropdown config">
                                    <div class="dropdown-toggle" aria-expanded="true" data-toggle="dropdown" role="menu">
                                        <img class="img-radius" alt="User-Profile-Image" src="img/users/user3.jpg"><span class="text-light"> John SR </span><i class="feather icon-chevron-down"></i></img>
                                    </div>
                                    <ul class="dropdown-menu dropdown-menu-right mb-3 menu-log flipInX animated  ml-auto" data-dropdown-out="fadeOut" data-dropdown-in="fadeIn">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link setting-btn">
                                                <i class="fa fa-cogs"></i> Settings
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="profile.html">
                                                <i class="fa fa-user"></i> Profile
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">
                                                <i class="fa fa-envelope"></i> My Messages
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">
                                                <i class="fa fa-lock"></i> Lock Screen
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">
                                                <i class="fa fa-sign-out"></i> Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="main-content">
                    <div class="row">
                        <div class="col-lg-12">
                            {/* <!--Page Content--> */}
                            <div class="wrapper wrapper-content">
                                {/* <!--Main Content--> */}
                                <div class="row mb-3">
                                    <div class="col-sm-12 col-md-7 col-lg-8 col-xl-8">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="#" class="default">Adminos</a></li>
                                            <li class="breadcrumb-item"><a href="#">Dashboards</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Dashboard v.1</li>
                                        </ol>
                                    </div>
                                    <div class="col-sm-12 col-md-5 col-lg-4 col-xl-4 text-center">
                                        <span id="Date" class="float-right"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                        <div class="panel-box statistic-bg-purple radius">
                                            <div class="panel-box-content">
                                                <div class="row">
                                                    <div class="col-6 statistic-box">
                                                        <h4 class="text-white">$1200</h4>
                                                        <h6 class="m-b-0 text-white">Total Revenue</h6>
                                                    </div>
                                                    <div class="col-6 pl-1 pl-2 statistic-charts pt-3">
                                                        <div id="sparkline1"></div>
                                                    </div>
                                                    <div class="col-12 statistic-footer">
                                                        <p class="text-white"><i class="feather icon-clock f-14"></i> update : 2:15 am</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                        <div class="panel-box statistic-bg-info radius">
                                            <div class="panel-box-content">
                                                <div class="row">
                                                    <div class="col-6 statistic-box">
                                                        <h4 class="text-white">700</h4>
                                                        <h6 class="m-b-0 text-white">Affiliate Revenue</h6>
                                                    </div>
                                                    <div class="col-6 pl-1 pl-2 statistic-charts pt-3">
                                                        <div id="sparkline2"></div>
                                                    </div>
                                                    <div class="col-12 statistic-footer">
                                                        <p class="text-white m-b-0"><i class="feather icon-clock f-14"></i> update : 2:15 am</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                        <div class="panel-box statistic-bg-red radius">
                                            <div class="panel-box-content">
                                                <div class="row">
                                                    <div class="col-6 statistic-box">
                                                        <h4 class="text-white">3600</h4>
                                                        <h6 class="m-b-0 text-white">+ Refunds</h6>
                                                    </div>
                                                    <div class="col-6 pl-1 pl-2 statistic-charts pt-3">
                                                        <div id="sparkline3"></div>
                                                    </div>
                                                    <div class="col-12 statistic-footer">
                                                        <p class="text-white m-b-0"><i class="feather icon-clock f-14"></i> update : 2:15 am</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                        <div class="panel-box statistic-bg-yellow radius">
                                            <div class="panel-box-content">
                                                <div class="row">
                                                    <div class="col-6 statistic-box">
                                                        <h4 class="text-white">$10,207</h4>
                                                        <h6 class="m-b-0 text-white">Visual Figure</h6>
                                                    </div>
                                                    <div class="col-6 pl-1 pl-2 statistic-charts pt-3">
                                                        <div id="sparkline4"></div>
                                                    </div>
                                                    <div class="col-12 statistic-footer">
                                                        <p class="text-white m-b-0"><i class="feather icon-clock f-14"></i> update : 2:15 am</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                                        <div class="panel-box">
                                            <div class="panel-box-title">
                                                <h5>Monthly View</h5>
                                                <div class="panel-box-tools">
                                                    <a class="collapse-link">
                                                        <i class="fa fa-chevron-up"></i>
                                                    </a>
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                                        <i class="fa fa-wrench"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-user dropdown-menu-right">
                                                        <li><a href="#">Config option 1</a></li>
                                                        <li><a href="#">Config option 2</a></li>
                                                    </ul>
                                                    <a class="close-link">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                                <p class="float-right">For more details about usage, please refer
                                                    <a href="https://www.amcharts.com/online-store/" class="text-navy">amCharts licence</a>
                                                </p>
                                            </div>
                                            <div class="panel-box-content">
                                                <div id="visitor" style="height:317px;"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                        <div class="panel-box">
                                            <div class="col-12 text-center panel-box-title">
                                                <h6>Project Completed</h6>
                                            </div>
                                            <div class="panel-box-content" style="height:390px;">
                                                <div class="row">
                                                    <div class="col-12 text-center">
                                                        <div class="col-12">
                                                            <div data-label="85%" class="radial-bar radial-bar-75 radial-bar-lg radial-bar-warning" data-toggle="tooltip" title="Project Completed 85%"></div>
                                                            <p>Version 1.0.0.5</p>
                                                            <h6><a href="#" class="yellow-link-color">View Project Report</a></h6>
                                                        </div>
                                                        <div class="pt-1 pl-3 pr-3">
                                                            <span class="pull-left">Current Task</span>
                                                            <span class="pull-right">30%</span>
                                                            <div class="progress" style="height: 4px; clear: both;">
                                                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%;"></div>
                                                            </div>
                                                        </div>
                                                        <div class="pt-2 pl-3 pr-3">
                                                            <span class="pull-left">Fixed Bugs</span>
                                                            <span class="pull-right">60%</span>
                                                            <div class="progress" style="height: 4px; clear: both;">
                                                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%"></div>
                                                            </div>
                                                        </div>
                                                        <div class="pt-2 pl-3 pr-3">
                                                            <span class="pull-left">Remaining Tasks</span>
                                                            <span class="pull-right">37%</span>
                                                            <div class="progress" style="height: 4px;  clear: both;">
                                                                <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100" style="width:37%"></div>
                                                            </div>
                                                        </div>
                                                        <div class="pt-2 pl-3 pr-3">
                                                            <span class="pull-left">Overall Progress</span>
                                                            <span class="pull-right">60%</span>
                                                            <div class="progress" style="height: 4px; clear: both;">
                                                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Sales Per Day, Visitor & Orders--> */}
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                        <div class="panel-box">
                                            <div class="panel-box-content">
                                                <div class="small-box bg-aqua mb-0 h-250">
                                                    <canvas id="sales-per-day" class="p-3"></canvas>
                                                    <div class="inner custom-inner">
                                                        <h4>$ 2,150</h4>
                                                        <p>Sales Per Day</p>
                                                    </div>
                                                    <a class="small-box-footer" href="#">More info <i class="fa fa-arrow-circle-right"></i></a>
                                                </div>
                                                <div class="custom-card-footer text-center">
                                                    <div class="monthly-static border-right">
                                                        <h5>$2035</h5>
                                                        <p>Total Revenue</p>
                                                    </div>
                                                    <div class="vertical-divider"></div>
                                                    <div class="monthly-static border-right">
                                                        <h5>$540</h5>
                                                        <p>Today Sales</p>
                                                    </div>
                                                    <div class="vertical-divider"></div>
                                                    <div class="monthly-static">
                                                        <h5>47</h5>
                                                        <p>Products</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                        <div class="panel-box">
                                            <div class="panel-box-content">
                                                <div class="small-box bg-warning mb-0 h-250">
                                                    <canvas id="visitors-per-day" class="p-3"></canvas>
                                                    <div class="inner custom-inner">
                                                        <h4><i class="fa fa-user-plus"></i> 122,150</h4>
                                                        <p>Visitors Per Year</p>
                                                    </div>
                                                    <a class="small-box-footer" href="#">More info <i class="fa fa-arrow-circle-right"></i></a>
                                                </div>
                                                <div class="custom-card-footer text-center">
                                                    <div class="monthly-static border-right">
                                                        <h5>3735</h5>
                                                        <p>This Month</p>
                                                    </div>
                                                    <div class="vertical-divider"></div>
                                                    <div class="monthly-static border-right">
                                                        <h5>440</h5>
                                                        <p>This Week</p>
                                                    </div>
                                                    <div class="vertical-divider"></div>
                                                    <div class="monthly-static">
                                                        <h5>67</h5>
                                                        <p>Today</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                        <div class="panel-box">
                                            <div class="panel-box-content">
                                                <div class="small-box bg-red mb-0 h-250">
                                                    <canvas id="orders-per-day" class="p-3"></canvas>
                                                    <div class="inner custom-inner">
                                                        <h4><i class="fa fa-shopping-basket"></i> 15823</h4>
                                                        <p>Orders Per Year</p>
                                                    </div>
                                                    <a class="small-box-footer" href="#">More info <i class="fa fa-arrow-circle-right"></i></a>
                                                </div>
                                                <div class="custom-card-footer text-center">
                                                    <div class="monthly-static border-right">
                                                        <h5>4735</h5>
                                                        <p>This Month</p>
                                                    </div>
                                                    <div class="vertical-divider"></div>
                                                    <div class="monthly-static border-right">
                                                        <h5>940</h5>
                                                        <p>This Week</p>
                                                    </div>
                                                    <div class="vertical-divider"></div>
                                                    <div class="monthly-static">
                                                        <h5>127</h5>
                                                        <p>Today</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Application Sales--> */}
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                                        <div class="panel-box">
                                            <div class="panel-box-title">
                                                <h5>Application Sales</h5>
                                                <div class="panel-box-tools">
                                                    <a class="collapse-link">
                                                        <i class="fa fa-chevron-up"></i>
                                                    </a>
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                                        <i class="fa fa-wrench"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-user dropdown-menu-right">
                                                        <li><a href="#">Config option 1</a></li>
                                                        <li><a href="#">Config option 2</a></li>
                                                    </ul>
                                                    <a class="close-link">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="panel-box-content">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th><input type="checkbox" checked class="i-checks" name="input[]"></input></th>
                                                                <th>Application</th>
                                                                <th>Sales</th>
                                                                <th>Change</th>
                                                                <th>Avg Price</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <input type="checkbox" checked class="i-checks" name="input[]"></input>
                                                                </td>
                                                                <td>
                                                                    <div class="d-inline-block align-middle">
                                                                        <h6 class="ml-0 pl-0">Adminos</h6>
                                                                        <p class="text-muted m-b-0">Powerful Admin Theme</p>
                                                                    </div>
                                                                </td>
                                                                <td>16,300</td>
                                                                <td><canvas id="app-sale1"></canvas></td>
                                                                <td>$53</td>
                                                                <td class="text-c-blue">$15,652</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input type="checkbox" checked class="i-checks" name="input[]"></input>
                                                                </td>
                                                                <td>
                                                                    <div class="d-inline-block align-middle">
                                                                        <h6 class="ml-0 pl-0">Photoshop</h6>
                                                                        <p class="text-muted m-b-0">Design Software</p>
                                                                    </div>
                                                                </td>
                                                                <td>26,421</td>
                                                                <td><canvas id="app-sale2"></canvas></td>
                                                                <td>$35</td>
                                                                <td class="text-c-blue">$18,785</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input type="checkbox" checked class="i-checks" name="input[]"></input>
                                                                </td>
                                                                <td>
                                                                    <div class="d-inline-block align-middle">
                                                                        <h6 class="ml-0 pl-0">RefineThemes</h6>
                                                                        <p class="text-muted m-b-0">Best Admin Templates</p>
                                                                    </div>
                                                                </td>
                                                                <td>8,265</td>
                                                                <td><canvas id="app-sale3"></canvas></td>
                                                                <td>$98</td>
                                                                <td class="text-c-blue">$9,652</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input type="checkbox" checked class="i-checks" name="input[]"></input>
                                                                </td>
                                                                <td>
                                                                    <div class="d-inline-block align-middle">
                                                                        <h6 class="ml-0 pl-0">RFETech</h6>
                                                                        <p class="text-muted m-b-0">Admin App</p>
                                                                    </div>
                                                                </td>
                                                                <td>10,652</td>
                                                                <td><canvas id="app-sale4"></canvas></td>
                                                                <td>$20</td>
                                                                <td class="text-c-blue">$7,856</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div class="text-center">
                                                        <a href="#!" class=" b-b-primary text-primary">View all Projects</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                        <div class="panel-box table-panel-box">
                                            <div class="panel-box-title ui-sortable-handle">
                                                <h5>Customer Reviews </h5>
                                                <div class="panel-box-tools">
                                                    <a class="collapse-link ui-sortable">
                                                        <i class="fa fa-chevron-up"></i>
                                                    </a>
                                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <i class="fa fa-wrench"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-user">
                                                        <li><a href="#">Action option 1</a></li>
                                                        <li><a href="#">Action option 2</a></li>
                                                    </ul>
                                                    <a class="close-link">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="panel-box-content">
                                                <div class="row reviews">
                                                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center ui-sortable">
                                                        <img src="img/users/user4.jpg" class="review-cirlce-img" alt=""></img>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 review-by ui-sortable">
                                                        <h6 class="ml-2">Sarah Deo</h6>
                                                        <p class="ml-2">Highly recommend</p>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 review-rating ui-sortable">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="row col-lg-12 reviews ui-sortable">
                                                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center ui-sortable">
                                                        <img src="img/users/user1.jpg" class="review-cirlce-img" alt=""></img>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 review-by ui-sortable">
                                                        <h6 class="ml-2">Jack Andrew</h6>
                                                        <p class="ml-2">Awesome</p>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 review-rating ui-sortable">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="row col-lg-12 reviews ui-sortable">
                                                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center ui-sortable">
                                                        <img src="img/users/user2.jpg" class="review-cirlce-img" alt=""></img>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 review-by ui-sortable">
                                                        <h6 class="ml-2">John Simth</h6>
                                                        <p class="ml-2">Extremely Good</p>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 review-rating ui-sortable">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-muted"></i>
                                                    </div>
                                                </div>
                                                <div class="row col-lg-12 reviews ui-sortable">
                                                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center ui-sortable">
                                                        <img src="img/users/user5.jpg" class="review-cirlce-img" alt=""></img>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 review-by ui-sortable">
                                                        <h6 class="ml-2">Jasmine Carlos</h6>
                                                        <p class="ml-2">Highly recommend</p>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 review-rating ui-sortable">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-muted"></i>
                                                    </div>
                                                </div>
                                                <div class="row col-lg-12 reviews ui-sortable">
                                                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center ui-sortable">
                                                        <img src="img/users/user6.jpg" class="review-cirlce-img" alt=""></img>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 review-by ui-sortable">
                                                        <h6 class="ml-2">Alexa Deora</h6>
                                                        <p class="ml-2">Highly recommend</p>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 review-rating ui-sortable">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-muted"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <a class=" b-b-primary text-primary" href="#">View all Reviews</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Smart Chat And Top Visitors--> */}
                                {/* <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                        <div class="chat_window panel-box">
                                            <div class="top_menu panel-box-title">
                                                <h5 class="text-center">Chat</h5>
                                                <div class="panel-box-tools">
                                                    <a class="collapse-link">
                                                        <i class="fa fa-chevron-up"></i>
                                                    </a>
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                                        <i class="fa fa-wrench"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-user dropdown-menu-right">
                                                        <li><a href="#">Config option 1</a></li>
                                                        <li><a href="#">Config option 2</a></li>
                                                    </ul>
                                                    <a class="close-link">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="panel-box-content msg-menu">
                                                <ul class="messages">
                                                    <li class="message left appeared">
                                                        <div class="avatar female-pic"><img src="img/users/user4.jpg" alt=""></div>
                                                        <div class="text_wrapper">
                                                            <div class="text">Hello John! :)</div>
                                                        </div>
                                                    </li>
                                                    <li class="message right appeared">
                                                        <div class="avatar male-pic"><img src="img/users/user2.jpg" alt="">
                                                        </div>
                                                        <div class="text_wrapper">
                                                            <div class="text">Hi Ninna! How are you?</div>
                                                        </div>
                                                    </li>
                                                    <li class="message left appeared">
                                                        <div class="avatar female-pic"><img src="img/users/user4.jpg" alt=""></div>
                                                        <div class="text_wrapper">
                                                            <div class="text">I'm fine, thank you!</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div class="bottom_wrapper clearfix">
                                                    <div class="d-flex">
                                                        <a class="nav-link" href="#"><i class="feather icon-mic"></i></a>
                                                        <a class="nav-link" href="#"><i class="feather icon-camera"></i></a>
                                                        <a class="nav-link" href="#"><i class="feather icon-paperclip"></i></a>
                                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true" href="#">
                                                            <i class="feather icon-more-horizontal"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-user dropdown-menu-right">
                                                            <li><a href="#">Config option 1</a></li>
                                                            <li><a href="#">Config option 2</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="message_input_wrapper">
                                                        <input class="message_input" id="send-text" placeholder="Type your message here..." />
                                                    </div>
                                                    <div class="send_message">
                                                        <div class="icon"></div>
                                                        <div class="text">Send</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                        <div class="panel-box">
                                            <div class="top_menu panel-box-title">
                                                <h5>Sales</h5>
                                                <div class="panel-box-tools">
                                                    <a class="collapse-link">
                                                        <i class="fa fa-chevron-up"></i>
                                                    </a>
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                                        <i class="fa fa-wrench"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-user dropdown-menu-right">
                                                        <li><a href="#">Config option 1</a></li>
                                                        <li><a href="#">Config option 2</a></li>
                                                    </ul>
                                                    <a class="close-link">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="panel-box-content p-3 bg-sky-line-blue">
                                                <div id="vmap" style="width:100%; height:356px;"></div>
                                            </div>
                                            <div class="panel-box-footer bg-inverse">
                                                <div class="panel-content jqvmap-bg-ocean">
                                                    <div class="d-flex align-items-center">
                                                        <img class="d-inline-block jqvmap-country-flag mr-3" alt="flag" src="img/flag-icon-css/flags/4x3/us.svg" style="width:55px; height: auto;">
                                                            <h6 class="d-inline-block fw-100 m-0 text-white">Sales in:
                                                                <small class="jqvmap-country">United States of America : $4,353</small>
                                                            </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="row">
                                    {/* <!-- Social widgets --> */}
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 ui-sortable">
                                        <div class="panel-box">
                                            <div class="panel-box-title ui-sortable-handle">
                                                <h5>Facebook Status</h5>
                                            </div>
                                            <div class="panel-box-content">
                                                <div class="facebook-bg custom-bg-height">
                                                    <i class="fa fa-facebook-f"></i>
                                                </div>
                                            </div>
                                            <div class="panel-box-content border-top">
                                                <div class="row pt-3 pb-3">
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Followers </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">72k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-success" role="progressbar" style="width: 72%;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Page Likes</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">39k</span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-info" role="progressbar" style="width: 39%;" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="space"></div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Shared</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">25k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-warning" role="progressbar" style="width: 39%;" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Comments </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">61k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 61%;" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 ui-sortable">
                                        <div class="panel-box">
                                            <div class="panel-box-title ui-sortable-handle">
                                                <h5>Twitter Status</h5>
                                            </div>
                                            <div class="panel-box-content">
                                                <div class="twitter-bg custom-bg-height">
                                                    <i class="fa fa-twitter"></i>
                                                </div>
                                            </div>
                                            <div class="panel-box-content border-top">
                                                <div class="row  pt-3 pb-3">
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Followers </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">56k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-success" role="progressbar" style="width: 56%;" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Page Likes</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">89k</span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-info" role="progressbar" style="width: 89%;" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="space"></div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Shared</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">55k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-warning" role="progressbar" style="width: 55%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2"> Comments </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">61k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 61%;" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 ui-sortable">
                                        <div class="panel-box">
                                            <div class="panel-box-title ui-sortable-handle">
                                                <h5>Instagram Status</h5>
                                            </div>
                                            <div class="panel-box-content">
                                                <div class="instagram-bg custom-bg-height">
                                                    <i class="fa fa-instagram"></i>
                                                </div>
                                            </div>
                                            <div class="panel-box-content border-top">
                                                <div class="row pt-3 pb-3">
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Followers </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">72k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-success" role="progressbar" style="width: 72%;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Page Likes</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">39k</span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-info" role="progressbar" style="width: 39%;" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="space"></div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Shared</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">25k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-warning" role="progressbar" style="width: 39%;" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2"> Comments </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">61k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 61%;" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 ui-sortable">
                                        <div class="panel-box">
                                            <div class="panel-box-title ui-sortable-handle">
                                                <h5>YouTube Status</h5>
                                            </div>
                                            <div class="panel-box-content">
                                                <div class="youtube-bg custom-bg-height">
                                                    <i class="fa fa-youtube"></i>
                                                </div>
                                            </div>
                                            <div class="panel-box-content border-top">
                                                <div class="row pt-3 pb-3">
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Subscribers </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">57k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-success" role="progressbar" style="width: 57%;" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Video Likes</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">69k</span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-info" role="progressbar" style="width: 69%;" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="space"></div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2">Shared</h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">45k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-warning" role="progressbar" style="width: 45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ui-sortable mb-2">
                                                        <div class="sell-ratio">
                                                            <h6 class="text-muted pl-2"> Comments </h6>
                                                            <div class="progress-w-percent pl-2 pr-2">
                                                                <span class="progress-value">31k </span>
                                                                <div class="progress" style="height: 4px;">
                                                                    <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 31%;" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Social widgets --> */}
                                </div>
                            </div>
                            {/* <!-- End Site Visitors --> */}
                            <div class="footer fixed">
                                <div>
                                    <strong>&copy; 2019</strong> Adminos By <a href="http://www.bootstrapmb.com">Reserved</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="notification-menu" class="sticky-top">
                <div class="notification-menu p-3 notify-scroll">
                    <div class="notification-heading">
                        <h6 class="menu-title">Messages <a href="#" class="float-right ml-auto" id="close-notification"><i class="feather icon-x"></i></a></h6>
                    </div>
                    <ul class="nav">
                        <li class="nav-item">
                            <div class="dropdown-messages-box">
                                <a href="profile.html" class="float-left pt-1">
                                    <img alt="image" class="img-circle" src="img/2.jpg"></img>
                                </a>
                                <div class="media-body">
                                    <small class="float-right">46h ago</small>
                                    <strong>John Loreipsum</strong> started following <strong>Anna Smith</strong>. <br></br>
                                        <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item">
                            <div class="dropdown-messages-box">
                                <a href="profile.html" class="float-left pt-1">
                                    <img alt="image" class="img-circle" src="img/users/user1.jpg"></img>
                                </a>
                                <div class="media-body ">
                                    <small class="float-right text-navy">5h ago</small>
                                    <strong>Chris jackson</strong> started following <strong>Anna Smith</strong>. <br></br>
                                        <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item">
                            <div class="dropdown-messages-box">
                                <a href="profile.html" class="float-left pt-1">
                                    <img alt="image" class="img-circle" src="img/users/user2.jpg"></img>
                                </a>
                                <div class="media-body ">
                                    <small class="float-right">23h ago</small>
                                    <strong>Monica Smith</strong> love <strong>Carlos Smith</strong>. <br></br>
                                        <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item">
                            <div class="dropdown-messages-box">
                                <a href="profile.html" class="float-left pt-1">
                                    <img alt="image" class="img-circle" src="img/users/user3.jpg"></img>
                                </a>
                                <div class="media-body ">
                                    <small class="float-right text-navy">5h ago</small>
                                    <strong>Chris jackson</strong> started following <strong>Anna Smith</strong>. <br></br>
                                        <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item">
                            <div class="dropdown-messages-box">
                                <a href="profile.html" class="float-left pt-1">
                                    <img alt="image" class="img-circle" src="img/users/user4.jpg"></img>
                                </a>
                                <div class="media-body ">
                                    <small class="float-right text-navy">5h ago</small>
                                    <strong>Chris jackson</strong> started following <strong>Anna Smith</strong>. <br></br>
                                        <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item">
                            <div class="dropdown-messages-box">
                                <a href="profile.html" class="float-left pt-1">
                                    <img alt="image" class="img-circle" src="img/users/user5.jpg"></img>
                                </a>
                                <div class="media-body ">
                                    <small class="float-right text-navy">5h ago</small>
                                    <strong>Chris jackson</strong> started following <strong>Anna Smith</strong>. <br></br>
                                        <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item">
                            <div class="dropdown-messages-box">
                                <a href="profile.html" class="float-left pt-1">
                                    <img alt="image" class="img-circle" src="img/users/user6.jpg"></img>
                                </a>
                                <div class="media-body ">
                                    <small class="float-right text-navy">5h ago</small>
                                    <strong>Chris jackson</strong> started following <strong>Anna Smith</strong>. <br></br>
                                        <small class="text-muted msg-date">3 days ago at 7:58 pm - 01.24.2019</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="notification-footer mb-5 text-center">
                        <h6 class="btn btn-link btn-sm btn-block"><i class="fa fa-spinner fa-spin"></i> Loading More...</h6>
                    </div>
                </div>
            </div>
            <div id="chat" class="sticky-top">
                <div class="chat-messages">
                    <div class="search-friends">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="search-users" placeholder="Search by name..."></input>
                                <div class="input-group-append">
                                    <button class="btn btn-default show-chat-list" type="submit" data-toggle="tooltip" title="Close Chat List">
                                        <i class="feather icon-x-circle"></i>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div class="online-friends">
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/2.jpg">
                                <strong class="username pt-3">John Carlos</strong></img>
                                <div class="online float-right"><i class="fa fa-circle text-success" data-toggle="tooltip" title="Online"></i></div>
                        </div>
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/9.jpg"></img>
                                <strong class="username pt-3">Andrew Smith</strong>
                                <div class="online float-right"><i class="fa fa-circle text-success" data-toggle="tooltip" title="Online"></i></div>
                        </div>
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/users/user1.jpg"></img>
                                <strong class="username pt-3">Mark Albert</strong>
                                <div class="online float-right"><i class="fa fa-circle text-success" data-toggle="tooltip" title="Online"></i></div>
                        </div>
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/users/user2.jpg"></img>
                                <strong class="username pt-3">Harry Kim</strong>
                                <div class="online float-right"><i class="fa fa-circle text-success" data-toggle="tooltip" title="Online"></i></div>
                        </div>
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/users/user5.jpg"></img>
                                <strong class="username pt-3">Nina Stephan</strong>
                                <div class="online float-right"><i class="fa fa-circle text-warning" data-toggle="tooltip" title="Away"></i></div>
                        </div>
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/users/user6.jpg"></img>
                                <strong class="username pt-3">Bill Simth</strong>
                                <div class="online float-right"><i class="fa fa-circle text-muted" data-toggle="tooltip" title="Offline"></i></div>
                        </div>
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/users/user4.jpg"></img>
                                <strong class="username pt-3">Delos Frank</strong>
                                <div class="online float-right"><i class="fa fa-circle text-success" data-toggle="tooltip" title="Online"></i></div>
                        </div>
                        <div class="friends  show-chat-msg">
                            <img alt="image" class="img-friends" src="img/users/user3.jpg"></img>
                                <strong class="username pt-3">Danny Larry</strong>
                                <div class="online float-right"><i class="fa fa-circle text-warning" data-toggle="tooltip" title="Away"></i></div>
                        </div>
                    </div>
                    <div class="des">
                        <strong>Notes:</strong>
                        <p class="small">Online friends panel is just for demo purpose and it dose not have any javascript
                            configuration script, you can add more configuration buttons to other settings panel. </p>
                    </div>
                </div>
            </div>
            {/* <div id="chat-messages" class="sticky-top">
                <div class="chat-messages">
                    <div class="search-friends text-center">
                        <i class="feather icon-arrow-right float-left close-chat-msg" data-toggle="tooltip" title="Close Messages"></i>
                        <strong class="username pt-3">John Carlos</strong>
                    </div>
                    <div class="online-friends-chat">
                        <div class="friend-replay">
                            <div class="user-pic">
                                <img alt="image" class="img-friends" src="img/2.jpg">
                            </div>
                            <div class="user-msg">
                                <p class="chat-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="your-replay">
                            <div class="your-pic">
                                <img alt="image" class="img-friends" src="img/users/user2.jpg">
                            </div>
                            <div class="your-msg">
                                <p class="chat-content bg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="friend-replay">
                            <div class="user-pic">
                                <img alt="image" class="img-friends" src="img/2.jpg">
                            </div>
                            <div class="user-msg">
                                <p class="chat-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="your-replay">
                            <div class="your-pic">
                                <img alt="image" class="img-friends" src="img/users/user2.jpg">
                            </div>
                            <div class="your-msg">
                                <p class="chat-content bg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="friend-replay">
                            <div class="user-pic">
                                <img alt="image" class="img-friends" src="img/2.jpg"></img>
                            </div>
                            <div class="user-msg">
                                <p class="chat-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="your-replay">
                            <div class="your-pic">
                                <img alt="image" class="img-friends" src="img/users/user2.jpg"></img>
                            </div>
                            <div class="your-msg">
                                <p class="chat-content bg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="chat-input">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="quick-chat" placeholder="Enter Message"></input>
                                <div class="input-group-append">
                                    <button class="btn btn-default" type="submit">
                                        <i class="feather icon-navigation"></i>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="selector-toggle">
                <a href="javascript:void(0)" class="right-sidebar-toggle"><i class="feather icon-settings rotate-icon"></i></a>
            </div>

            <div id="right-sidebar" class="animated">
                <div class="sidebar-container">
                    <ul class="nav nav-tabs navs-3 setting-menu default-theme" id="mySidenav">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab-1"> Skin</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-2"><i class="fa fa-cogs"></i></a></li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane active">
                            <div class="sidebar-title">
                                <h5> <i class="fa fa-th" aria-hidden="true"></i> Select Skins</h5>
                                <small>You have 14 Skin Colors.</small>
                            </div>
                            <br></br>
                                <div class="color-theme-panel">
                                    <div class="themes-scroll">
                                        <h6>Sidebar Layout</h6>
                                        <div class="theme-color">
                                            <a class="btn-sidebar-theme" data-myattr="white-theme" href="#">
                                                <div class="sidebar-white"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="default-theme" href="#">
                                                <div class="sidebar-colored"></div>
                                            </a>
                                        </div>
                                        <h6>Top Navbar</h6>
                                        <div class="theme-color">
                                            <a class="btn-header-theme" data-myattr="topNav-white-theme" href="#">
                                                <div class="theme-29"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-default-theme" href="#">
                                                <div class="theme-5"></div>
                                            </a>
                                        </div>
                                        <h6>Header Color</h6>
                                        <div class="theme-color">
                                            <a class="btn-header-theme" data-myattr="topNav-blue-theme" href="#">
                                                <div class="theme-1"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-brown-theme" href="#">
                                                <div class="theme-2"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-dark-gray-theme" href="#">
                                                <div class="theme-3"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-dark-pink-theme" href="#">
                                                <div class="theme-4"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-default-theme" href="#">
                                                <div class="theme-5"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-gray-theme" href="#">
                                                <div class="theme-6"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-green-theme" href="#">
                                                <div class="theme-7"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-light-blue-theme" href="#">
                                                <div class="theme-8"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-light-green-theme" href="#">
                                                <div class="theme-9"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-orange-theme" href="#">
                                                <div class="theme-10"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-purple-theme" href="#">
                                                <div class="theme-11"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-red-theme" href="#">
                                                <div class="theme-12"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-sky-theme" href="#">
                                                <div class="theme-13"></div>
                                            </a>
                                            <a class="btn-header-theme" data-myattr="topNav-yellow-theme" href="#">
                                                <div class="theme-14"></div>
                                            </a>
                                        </div>
                                        <h6>Sidebar Color</h6>
                                        <div class="theme-color">
                                            <a class="btn-sidebar-theme" data-myattr="blue-theme" href="#">
                                                <div class="theme-15"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="brown-theme" href="#">
                                                <div class="theme-16"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="dark-gray-theme" href="#">
                                                <div class="theme-17"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="dark-pink-theme" href="#">
                                                <div class="theme-18"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="default-theme" href="#">
                                                <div class="theme-19"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="gray-theme" href="#">
                                                <div class="theme-20"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="green-theme" href="#">
                                                <div class="theme-21"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="light-blue-theme" href="#">
                                                <div class="theme-22"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="light-green-theme" href="#">
                                                <div class="theme-23"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="orange-theme" href="#">
                                                <div class="theme-24"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="purple-theme" href="#">
                                                <div class="theme-25"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="red-theme" href="#">
                                                <div class="theme-26"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="sky-theme" href="#">
                                                <div class="theme-27"></div>
                                            </a>
                                            <a class="btn-sidebar-theme" data-myattr="yellow-theme" href="#">
                                                <div class="theme-28"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <hr></hr>
                                        <div class="sidebar-content">
                                            <strong>Notes:</strong>
                                            <div class="small">
                                                Other Settings is just for demo purpose and it dose not have any javascript
                                                configuration script, you can add more
                                                configuration buttons to other settings panel.
                                            </div>
                                        </div>
                                </div>
                        </div>
                        <div id="tab-2" class="tab-pane">
                            <div class="sidebar-title">
                                <h5><i class="fa fa-gears"></i> Settings</h5>
                                <small>You have 12 configuration settings options.</small>
                            </div>
                            <div class="setting-scroll">
                                <div class="setings-item">
                                    <span>
                                        Fix Navbar
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" checked name="collapsemenu" class="onoffswitch-checkbox" id="fixed-top-navbar"></input>
                                                <label class="onoffswitch-label" for="fixed-top-navbar">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Mini Sidebar Menu
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="mini-sidebar-menu"></input>
                                                <label class="onoffswitch-label" for="mini-sidebar-menu">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        RTL Navbar
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="RTL-layout"></input>
                                                <label class="onoffswitch-label" for="RTL-layout">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Show Notifications
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="show-notifications"></input>
                                                <label class="onoffswitch-label" for="show-notifications">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Fixed Footer
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" checked name="collapsemenu" class="onoffswitch-checkbox" id="fixed-footer"></input>
                                                <label class="onoffswitch-label" for="fixed-footer">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Disable Quick Chat
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="disableChat"></input>
                                                <label class="onoffswitch-label" for="disableChat">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Collapsed Panels
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="collapsed-panels"></input>
                                                <label class="onoffswitch-label" for="collapsed-panels">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-header">
                                    <h5><i class="fa fa-server"></i> Other Settings</h5>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Enable History
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example9"></input>
                                                <label class="onoffswitch-label" for="example9">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Offline Users
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" checked name="collapsemenu" class="onoffswitch-checkbox" id="example10"></input>
                                            <label class="onoffswitch-label" for="example10">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Global Search
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" checked name="collapsemenu" class="onoffswitch-checkbox" id="example11"></input>
                                            <label class="onoffswitch-label" for="example11">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="setings-item">
                                    <span>
                                        Update Everyday
                                    </span>
                                    <div class="switch float-right">
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example12"></input>
                                            <label class="onoffswitch-label" for="example12">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-content">
                                <strong>Notes:</strong>
                                <div class="small">
                                    Other Settings is just for demo purpose and it dose not have any javascript configuration
                                    script, you can add more
                                    configuration buttons to other settings panel.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

    );
}

export default App_test;
