# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the BlogPostsController which inherets from the ApplicationController. From here all CRUD actions can be carried out.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # In the index method, the goal should be to carry out a GET request to the database in order to recieve some kind of data. In this case, the instance variable below is containing the Active record query that will display all posts in the database BlogPost.
    @posts = BlogPost.all
  end

  # ---3)
  # the show method will also be responsible for a GET request as well. In this case the criteria is more specific. Inside the method, the instance variable post will be used to store the Active Record query find. In this case this is being used on the BlogPost database and takes in the primary key as an argument. This parameter can be passed in browser or through a db manager like postman. Which ever primary key is passed will determine the db item that is shown.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # the new method has a very particular functionality only shared by edit which serves to act as a form in which template code can be applied. In this case new is being used to set up a space in which new db items can be eventually created, added, and manipulated.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Inside the create method we see the instance variable post being assigned to the Active record query of create. Create instead of taking normal params, takes a prespecified method called blog_post_params that contains a series of permissions in order to specify what kind of data can be passed into the create method. In this case, the CRUD action used would be POST. The main check in what kind of data is passed occurs underneath line 34. Here there are validations that will either show the new item added within the rest of the db items or simply refreshes the page via a redirect, clearing any input info. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # Much like new was a template for create, so too is edit for update. This CRUD action is exactly that, update. In the same way as edit specified a template, edit uses the instance variable post to store which selected database entry will be pulled to update. In this case we are still using the primary key and dont need to use strong params in that there is no new data being entered just yet. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Inside update, after recieving the desired key, the option to update the data is available. This however, before submission, must be check through valiadations via strong params as seen on line 51
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # On line 66 there is a specific change that takes place if the conditional hits the else statment. Specifically, the user is redirected back to where the data can be manipulated once again. Whats mainly happening in the destory methods validations is checking for whether or not an item is destroyed, as an HTTP verb, deleted.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Private on line 72 is specified in order to define accessibility within the scope of the controller. In this case we want to make sure blog_post_params are protected because these should not be mutable values, nor should anybody be able to access them. This is because we specify what kind of data the rest of our methods should be able to take, but more importantly, what kind of data they should not be able to take. This this case on line 76, this data is exclusively :title and :content, outside of that, nothing else should be able to passed in.
  private
  def blog_post_params
    # ---10)
    # Line 76 can be broken down into a few parts; require and permit. Require specifies which db these protections/specifications will be upheld and permit defines what kind of data that is. 
    params.require(:blog_post).permit(:title, :content)
  end
end
